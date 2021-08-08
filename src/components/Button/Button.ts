import Handlebars from 'handlebars';
import Block from '../Block';
import tmpl from './Button.tmpl';
import { ComponentProps } from '../Types';

const template = Handlebars.compile(tmpl);

interface ButtonProps extends ComponentProps {
  text: string;
  type?: string;
}

export default class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render() {
    return template({
      id: this._id,
      ...this.props
    });
  }
};
