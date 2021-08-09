import Handlebars from 'handlebars';
import template from './chat.tmpl';
import image from '../../../assets/profile_placeholder.png';
import './chat.scss';

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

const tmpl = Handlebars.compile(template);
export default tmpl({
  contacts,
  image,
  user
});
