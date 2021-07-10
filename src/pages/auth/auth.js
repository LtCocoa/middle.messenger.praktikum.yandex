import Templator from '../../templator/Templator';
import template from './auth.tmpl';

const authTemplate = new Templator(template);
const renderedAuthTemplate = authTemplate.compile();
export default renderedAuthTemplate;