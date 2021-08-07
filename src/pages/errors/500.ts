import Handlebars from 'handlebars';
import template from './500.tmpl';
import './error.scss';

const tmpl = Handlebars.compile(template);
export default tmpl({});