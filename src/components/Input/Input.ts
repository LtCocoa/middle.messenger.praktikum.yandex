import Block from '../Block';
import { ComponentProps } from '../Types';

interface InputProps extends ComponentProps {
  name?: string;
  type?: string;
  value?: string;
  onClick: () => void;
  onInput: () => void;
  onBlur: () => void;
  onFocus: () => void;
};

export class Input extends Block {
  constructor({name, type, value, cssClass, onClick, onInput, onBlur, onFocus}: InputProps) {
    super({name, type, value, cssClass, events: {
      click: onClick,
      input: onInput,
      blur: onBlur,
      focus: onFocus
    }});
  }

  render() {
    return `<input uuid="{{ id }}" type="{{ type }}" class="{{ cssClass }}" value="{{ value }}">`;
  }
};
