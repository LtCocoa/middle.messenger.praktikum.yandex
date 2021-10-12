import Handlebars from 'handlebars';
import template from './chat.tmpl';
import Block from '../../components/Block';
import image from '../../../assets/profile_placeholder.png';
import './chat.scss';
import { AuthController } from '../../controllers/AuthController';

const tmpl = Handlebars.compile(template);
const controller = new AuthController();

controller.getUserInfo()
  .then((userData) => {
    console.log(userData);
  });

export class Chats extends Block {
  constructor() {
    super('div');
  }

  render() {
    return tmpl({
      id: this._id,
      contacts,
      image,
      user
    });
  }
}

const contacts = [
  {
    name: 'Person 1',
    message: 'Message 1',
    imgSrc: image
  },
  {
    name: 'Person 2',
    message: 'Message 2',
    imgSrc: image
  },
];

const user = {
  name: 'Username',
  status: 'В сети'
};
