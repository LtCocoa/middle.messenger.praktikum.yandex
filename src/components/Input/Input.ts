import Block from '../Block';
import { ComponentProps } from '../Types';

interface InputProps extends ComponentProps {
  name?: string;
  type?: string;
  value?: string;
  accept?: string;
  onClick: () => void;
  onInput: () => void;
  onBlur: () => void;
  onFocus: () => void;
};

export class Input extends Block {
  constructor({name, type, value, cssClass, accept, elementId, onClick, onInput, onBlur, onFocus}: InputProps) {
    super({name, type, value, cssClass, accept, elementId, events: {
      click: onClick,
      input: onInput,
      blur: onBlur,
      focus: onFocus
    }});
  }

  render() {
    return `<input id="{{elementId}}" uuid="{{ id }}" type="{{ type }}" class="{{ cssClass }}" value="{{ value }}" accept="{{ accept }}">`;
  }
};
