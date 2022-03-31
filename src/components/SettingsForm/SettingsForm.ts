import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './SettingsForm.tmpl';
import { ComponentProps } from '../Types';
import image from '../../../assets/profile_placeholder.png';

export default class SettingsForm extends Block {
  template: string;

  constructor(props: ComponentProps) {
    super(props);
  }

  render() {
    return tmpl;
  }
};

// const logoutButton = new Button({
//   text: 'Выйти',
//   class: 'profile-controls__button red',
//   type: 'button',
//   events: {
//     click: () => {
//       controller.logout();
//     }
//   }
// }).getHTML();
