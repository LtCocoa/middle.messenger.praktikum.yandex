import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './SettingsForm.tmpl';
import { ComponentProps } from '../Types';
import image from '../../../assets/profile_placeholder.png';
import Button from '../Button/Button';
import { AuthController } from '../../controllers/AuthController';

const template = Handlebars.compile(tmpl);
const controller = new AuthController();

export default class SettingsForm extends Block {
  template: string;

  constructor(props: ComponentProps) {
    super('div', props);
  }

  render() {
    return template({
      id: this._id,
      ...this.props,
      logoutButton,
      image,
    });
  }
};

const logoutButton = new Button({
  text: 'Выйти',
  class: 'profile-controls__button red',
  type: 'button',
  events: {
    click: () => {
      controller.logout();
    }
  }
}).getHTML();
