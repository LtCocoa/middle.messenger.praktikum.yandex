import Handlebars from 'handlebars';
import Block from '../../components/Block';
import template from './404.tmpl';
import './error.scss';

const tmpl = Handlebars.compile(template);

export class Error404 extends Block {
  constructor() {
    super();
  }

  render() {
    return tmpl({
      id: this._id,
    });
  }
}
