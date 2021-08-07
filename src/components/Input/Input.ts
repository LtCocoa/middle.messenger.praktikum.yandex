import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './Input.tmpl';
import { ComponentProps } from '../Types';

interface InputProps extends ComponentProps {
  name?: string,
  type?: string
};

export default class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    const template = Handlebars.compile(tmpl);
    return template({
      id: this._id,
      ...this.props
    });
  }
};
