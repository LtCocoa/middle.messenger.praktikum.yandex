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
      saveUserData: () => {
        const avatar = document.getElementById('avatar');
        const form = new FormData();
        form.append('avatar', avatar.files[0]);
        UserController.uploadAvatar(form).then(() => {
          AuthController.getUserInfo();
        });
      },
      image: () => {
        return this.props.user.avatar ? this.props.user.avatar : avatarPlaceholder;
      }
    };
  }

  render() {
    return template;
  }

  componentDidMount() {
    console.log(this);
  }
}

export default withRouter(connect((state: any) => ({ user: state.user.profile }), UserProfile));
