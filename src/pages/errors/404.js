import Templator from '../../templator/Templator';
import template from './404.tmpl';
import './error.scss';

const error404Template = new Templator(template);
const renderedError404Template = error404Template.compile();

export default renderedError404Template;