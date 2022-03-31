import template from './auth.tmpl';
import Block from '../../components/Block';
import AuthController from '../../controllers/AuthController';
import { Router } from '../../router/Router';

export class Auth extends Block {
  protected getStateFromProps() {
    this.state = {
      loginButtonClick: () => {
        const data = {};

        Object.entries(this.refs as {[key: string]: HTMLInputElement}).forEach(([key, input]) => {
          data[key] = input.value;
        });

        AuthController.signin({
          login: data.login,
          password: data.password
        });
      },
      onRegistrationButtonClick: () => {
        Router.go('/sign-up');
      },
      blurTest: () => {
        
      },
    };
  }
  render() {
    return template;
  }
}
