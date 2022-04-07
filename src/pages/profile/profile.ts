import template from './profile.tmpl';
import Block from '../../components/Block';
import './profile.scss';
import { connect } from '../../store/index';
import { withRouter } from '../../router/Router';
import AuthController from '../../controllers/AuthController';

export class UserProfile extends Block {
  getStateFromProps() {
    this.state = {
      logoutButtonClick: () => {
        AuthController.logout();
      }
    };
  }

  render() {
    return template;
  }
}

export default withRouter(connect((state: any) => ({ user: state.user.profile }), UserProfile));
