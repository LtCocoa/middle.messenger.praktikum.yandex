import Templator from '../../templator/Templator';
import template from './chat.tmpl';
import './chat.scss';

const chatTemplate = new Templator(template);

const renderedChatTemplate = chatTemplate.compile();

export default renderedChatTemplate;