import Block from '../Block';
import { ComponentProps } from '../Types';

interface ButtonProps extends ComponentProps {
  text: string;
  type?: string;
  name?: string,
  onClick: () => void;
}

export class Button extends Block {
  constructor({text, type, cssClass, name, onClick}: ButtonProps) {
    super({text, type, cssClass, name, events: {click: onClick}});
  }

  render() {
    return `<button uuid="{{ id }}" type="{{ type }}" class="{{ cssClass }}" name="{{ name }}">{{ text }}</button>`;
  }
};
