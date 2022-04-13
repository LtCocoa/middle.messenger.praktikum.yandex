import Handlebars from 'handlebars';
import Block from '../../components/Block';
import template from './500.tmpl';
import './error.scss';

const tmpl = Handlebars.compile(template);

export class Error500 extends Block {
  constructor() {
    super();
  }

  render() {
    return tmpl({
      id: this._id,
    });
  }
}