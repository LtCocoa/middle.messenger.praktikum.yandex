import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './Input.tmpl';
import { ComponentProps } from '../Types';

const template = Handlebars.compile(tmpl);

interface InputProps extends ComponentProps {
  name?: string;
  type?: string;
};

export default class Input extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  render() {
    return template({
      id: this._id,
      ...this.props
    });
  }
};
