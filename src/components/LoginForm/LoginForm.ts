import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './LoginForm.tmpl';
import { ComponentProps } from '../Types';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  validateLogin,
  validatePassword,
  checkValidation
} from '../../utils/Validators';
import { Router } from '../../router/Router';

const template = Handlebars.compile(tmpl);

export default class LoginForm extends Block {
  constructor(props: ComponentProps) {
    super('div', props);
  }

  render() {
    return template({
      id: this._id,
      loginInput,
      passwordInput,
      loginButton,
      registrationButton
    });
  }
};

const registrationButton = new Button({
  text: 'Регистрация',
  class: 'form-header__button',
  type: 'button',
  events: {
    click: () => {
      Router.__instance.go('/sign-up');
    }
  }
}).getHTML();

const loginInput = new Input({
  class: 'form-field__input',
  name: 'login',
  events: {
    blur: checkValidation('#login_tooltip', validateLogin, 'active'),
    focus: checkValidation('#login_tooltip', validateLogin, 'active'),
  }
}).getHTML();

const passwordInput = new Input({
  class: 'form-field__input',
  name: 'password',
  type: 'password',
  events: {
    blur: checkValidation('#password_tooltip', validatePassword, 'active'),
    focus: checkValidation('#password_tooltip', validatePassword, 'active'),
  }
}).getHTML();

const loginButton = new Button({
  text: 'Авторизоваться',
  class: 'form-controls__button primary',
  type: 'submit',
}).getHTML();
