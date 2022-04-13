import template from './registration.tmpl';
import Block from '../../components/Block';
import { Router } from '../../router/Router';
import AuthController, { SignUpFormData } from '../../controllers/AuthController';
import {
  validateEmail,
  validateLogin,
  validatePassword,
  validateName,
  validatePhoneNumber,
  checkValidation
} from '../../utils/Validators';
import { connect } from '../../store/index';
import { withRouter } from '../../router/Router';

export class Registration extends Block {
  protected getStateFromProps() {
    this.state = {
      signinButtonClick: () => {
        Router.go('/');
      },

      signupButtonClick: () => {
        const data: SignUpFormData = {
          first_name: '',
          second_name: '',
          login: '',
          email: '',
          password: '',
          repeat_password: '',
          phone: '',
        };

        Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
          data[key] = input.value;
        });
  
        AuthController.signup(data);
      },

      emailValidation: (event: Event) => {
        checkValidation('#email_tooltip', validateEmail, 'active')(event);
      },

      loginValidation: (event: Event) => {
        checkValidation('#login_tooltip', validateLogin, 'active')(event);
      },

      firstNameValidation: (event: Event) => {
        checkValidation('#first_name_tooltip', validateName, 'active')(event);
      },

      secondNameValidation: (event: Event) => {
        checkValidation('#second_name_tooltip', validateName, 'active')(event);
      },

      phoneValidation: (event: Event) => {
        checkValidation('#phone_tooltip', validatePhoneNumber, 'active')(event);
      },

      passwordValidation: (event: Event) => {
        checkValidation('#password_tooltip', validatePassword, 'active')(event);
      },

      repeatPasswordValidation: (event: Event) => {
        checkValidation('#repeat_password_tooltip', validatePassword, 'active')(event);
      },
    };
  }

  render() {
    return template;
  }
}

export default withRouter(connect((state: any) => ({user: state.user || {}}), Registration));
