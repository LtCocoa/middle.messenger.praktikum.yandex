import Block from '../Block';
import { ComponentProps } from '../Types';

interface ButtonProps extends ComponentProps {
  text: string;
  type?: string;
  onClick: () => void;
}

export class Button extends Block {
  constructor({text, onClick}: ButtonProps) {
    super({text, events: {click: onClick}});
  }

  render() {
    return `<button class="{{ class }}" uuid="{{ id }}" type="{{ type }}">{{ text }}</button>`;
  }
};
