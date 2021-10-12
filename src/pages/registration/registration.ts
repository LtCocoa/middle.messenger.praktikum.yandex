import Handlebars from 'handlebars';
import template from './registration.tmpl';
import Block from '../../components/Block';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { AuthController, SignUpFormData } from '../../controllers/AuthController';

const tmpl = Handlebars.compile(template);
const controller = new AuthController();

export class Registration extends Block {
  constructor() {
    super('div');
  }

  render() {
    return tmpl({
      id: this._id,
      registrationForm
    });
  }
}

const registrationForm = new RegistrationForm({
  events: {
    submit: (event: Event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const params: SignUpFormData = [...formData.entries()].reduce((obj, cur) => {
        const [key, value]: [string, FormDataEntryValue] = cur;
        obj[key] = value.toString();
        return obj;
      }, {} as SignUpFormData);
      controller.signup(params);
    }
  }
}).getHTML();
