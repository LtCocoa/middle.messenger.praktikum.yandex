import template from './auth.tmpl';
import Block from '../../components/Block';
import AuthController from '../../controllers/AuthController';
import { Router } from '../../router/Router';
import {
  validateLogin,
  validatePassword,
  checkValidation
} from '../../utils/Validators';
import { connect } from '../../store/index';
import { withRouter } from '../../router/Router';
import { store } from '../../store';


class Auth extends Block {
  getStateFromProps() {
    this.state = {
      signinButtonClick: () => {
        const data = {};

        Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
          data[key] = input.value;
        });

        AuthController.signin({
          login: data.login,
          password: data.password
        });
      },

      signupButtonClick: () => {
        Router.go('/sign-up');
      },

      loginValidation: (event: Event) => {
        checkValidation('#login_tooltip', validateLogin, 'active')(event);
      },

      passwordValidation: (event: Event) => {
        checkValidation('#password_tooltip', validatePassword, 'active')(event);
      },
    };
  }

  componentDidMount() {
    if (this.props.user.profile) {
      Router.go('/messenger');
    }
  }

  render() {
    return template;
  }
}

export default withRouter(connect((state: any) => ({user: state.user || {}}), Auth));
