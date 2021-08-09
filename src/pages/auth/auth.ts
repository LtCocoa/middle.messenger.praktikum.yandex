import Handlebars from 'handlebars';
import template from './auth.tmpl';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  validateLogin,
  validatePassword,
  checkValidation
} from '../../utils/Validators';

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

const tmpl = Handlebars.compile(template);
export default tmpl({
  loginInput,
  passwordInput,
  loginButton,
});
