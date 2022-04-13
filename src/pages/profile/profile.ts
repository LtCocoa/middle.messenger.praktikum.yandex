import template from './profile.tmpl';
import Block from '../../components/Block';
import './profile.scss';
import { connect } from '../../store/index';
import { withRouter } from '../../router/Router';
import AuthController from '../../controllers/AuthController';
import UserController from '../../controllers/UserController';
import avatarPlaceholder from '../../../assets/profile_placeholder.png';

export class UserProfile extends Block {
  getStateFromProps() {
    this.state = {
      logoutButtonClick: () => {
        AuthController.logout();
      },
      saveUserAvatar: () => {
        const avatar = document.getElementById('avatar');
        const form = new FormData();
        form.append('avatar', avatar.files[0]);
        UserController.uploadAvatar(form).then(() => {
          AuthController.getUserInfo();
        });
      },
      image: () => {
        return this.props.user?.avatar ? this.props.user?.avatar : avatarPlaceholder;
      },
      saveUserData: () => {
        const data = {};

        Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
          data[key] = input.value;
        });

        UserController.changeUserData(data);
      },
      showModal: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#modal');
        modal?.showModal();
      },
      changePassword: () => {
        const oldPassword = this.refs.oldPassword.value;
        const newPassword = this.refs.newPassword.value;
        const repeatNewPassword = this.refs.repeatNewPassword.value;

        if (newPassword !== repeatNewPassword) {
          return;
        }

        const data = {
          oldPassword: oldPassword,
          newPassword: newPassword
        };
        UserController.changeUserPassword(data).then(() => {
          AuthController.getUserInfo();
        });
      },
      cancelChangePassword: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#modal');
        modal?.close();
      }
    };
  }

  render() {
    return template;
  }
}

export default withRouter(connect((state: any) => ({ user: state.user.profile }), UserProfile));
