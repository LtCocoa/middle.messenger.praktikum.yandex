import Block from '../Block';
import { ComponentProps } from '../Types';

interface LinkProps extends ComponentProps {
  text?: string;
  onClick: () => void;
};

export class Link extends Block {
  constructor({text, cssClass, elementId, onClick}: LinkProps) {
    super({text, cssClass, elementId, events: {
      click: onClick,
    }});
  }

  render() {
    return `<a id="{{elementId}}" uuid="{{ id }}" class="{{ cssClass }}">{{text}}</a>`;
  }
};
