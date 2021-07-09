import Templator from '../../templator/Templator';
import template from './500.tmpl';
import './error.scss';

const error500Template = new Templator(template);
const renderedError500Template = error500Template.compile();

export default renderedError500Template;