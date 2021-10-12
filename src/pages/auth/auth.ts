import Handlebars from 'handlebars';
import template from './auth.tmpl';
import Block from '../../components/Block';
import LoginForm from '../../components/LoginForm/LoginForm';
import { AuthController } from '../../controllers/AuthController';

const tmpl = Handlebars.compile(template);
const controller = new AuthController();

export class Auth extends Block {
  constructor() {
    super('div');
  }

  render() {
    return tmpl({
      id: this._id,
      loginForm
    });
  }
}

const loginForm = new LoginForm({
  events: {
    submit: (event: Event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const [login, password] = [...data.values()];
      const params = { login: login.toString(), password: password.toString() };
      controller.signin(params);
    }
  }
}).getHTML();
