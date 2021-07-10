import Templator from '../../templator/Templator';
import template from './registration.tmpl';

const registrationTemplate = new Templator(template);
const renderedRegistrationTemplate = registrationTemplate.compile();
export default renderedRegistrationTemplate;