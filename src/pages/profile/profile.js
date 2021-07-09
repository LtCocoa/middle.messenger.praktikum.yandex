import Templator from '../../templator/Templator';
import template from './profile.tmpl';
// import image from 'url:../../../assets/profile_placeholder.png?width=150';
import './profile.scss';

const profileTemplate = new Templator(template);

const ctx = {
  image
}

const renderedProfileTemplate = profileTemplate.compile(ctx);

export default renderedProfileTemplate;