import Handlebars from 'handlebars';
import template from './profile.tmpl';
import Block from '../../components/Block';
import SettingsForm from '../../components/SettingsForm/SettingsForm';
import './profile.scss';

const tmpl = Handlebars.compile(template);

export class UserProfile extends Block {
  constructor() {
    super('div');
  }

  render() {
    return tmpl({
      id: this._id,
      settingsForm
    });
  }
}

const settingsForm = new SettingsForm({
  events: {
    submit: event => {
      event.preventDefault();
      console.log(event);
    }
  }
}).getHTML();
