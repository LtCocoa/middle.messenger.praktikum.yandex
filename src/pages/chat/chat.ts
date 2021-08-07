import Handlebars from 'handlebars';
import template from './chat.tmpl';
import image from '../../../assets/profile_placeholder.png';
import './chat.scss';

const tmpl = Handlebars.compile(template);
export default tmpl({});
