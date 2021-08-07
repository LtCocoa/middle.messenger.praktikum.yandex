import Handlebars from 'handlebars';
import template from './registration.tmpl';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
  validateEmail,
  validateLogin,
  validatePassword,
  validateName,
  validatePhoneNumber,
  checkValidation
} from '../../utils/Validators';

const emailInput = new Input({
  class: 'form-field__input',
  name: 'email',
  type: 'email',
  events: {
    blur: checkValidation('#email_tooltip', validateEmail, 'active'),
    focus: checkValidation('#email_tooltip', validateEmail, 'active'),
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

const firstNameInput = new Input({
  class: 'form-field__input',
  name: 'first_name',
  events: {
    blur: checkValidation('#first_name_tooltip', validateName, 'active'),
    focus: checkValidation('#first_name_tooltip', validateName, 'active'),
  }
}).getHTML();

const secondNameInput = new Input({
  class: 'form-field__input',
  name: 'second_name',
  events: {
    blur: checkValidation('#second_name_tooltip', validateName, 'active'),
    focus: checkValidation('#second_name_tooltip', validateName, 'active'),
  }
}).getHTML();

const phoneInput = new Input({
  class: 'form-field__input',
  name: 'phone',
  type: 'tel',
  events: {
    blur: checkValidation('#phone_tooltip', validatePhoneNumber, 'active'),
    focus: checkValidation('#phone_tooltip', validatePhoneNumber, 'active'),
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

const repeatPasswordInput = new Input({
  class: 'form-field__input',
  name: 'repeat_password',
  type: 'password',
  events: {
    blur: checkValidation('#repeat_password_tooltip', validatePassword, 'active'),
    focus: checkValidation('#repeat_password_tooltip', validatePassword, 'active'),
  }
}).getHTML();

const registerButton = new Button({
  text: 'Зарегистрироваться',
  class: 'form-controls__button primary',
  type: 'submit',
}).getHTML();

const tmpl = Handlebars.compile(template);
export default tmpl({
  emailInput,
  loginInput,
  firstNameInput,
  secondNameInput,
  phoneInput,
  passwordInput,
  repeatPasswordInput,
  registerButton,
});
