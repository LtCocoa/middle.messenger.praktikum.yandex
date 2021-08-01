import Handlebars from 'handlebars';
import Block from './Block';

export default class Button extends Block {
  constructor(props: object) {
    super('button', props);
  }

  render() {
    const id = this._id;
    const template = Handlebars.compile(`<div uuid={{ id }}>${this.props.text}</div>`);
    return template({ id });
  }
};