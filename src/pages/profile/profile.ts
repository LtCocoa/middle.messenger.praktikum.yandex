import Handlebars from 'handlebars';
import template from './profile.tmpl';
import image from '../../../assets/profile_placeholder.png';
import './profile.scss';

const tmpl = Handlebars.compile(template);
export default tmpl({
  image
});
