import Block from '../Block';
import { ComponentProps } from '../Types';

interface InputProps extends ComponentProps {
  name?: string;
  type?: string;
  onClick: () => void;
  onInput: () => void;
};

export class Input extends Block {
  constructor({name, onClick, onInput}: InputProps) {
    super({name, events: {click: onClick, input: onInput}});
  }

  render() {
    return `<input type={{ type }} uuid="{{ id }}" />`;
  }
};
