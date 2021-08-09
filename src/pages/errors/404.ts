import Handlebars from 'handlebars';
import template from './404.tmpl';
import './error.scss';

const tmpl = Handlebars.compile(template);
export default tmpl({});
