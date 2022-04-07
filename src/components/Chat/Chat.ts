import Block from '../Block';
import { ComponentProps } from '../Types';

interface ChatProps extends ComponentProps {
  id: number;
  chatName: string;
  lastMessage: string;
  avatar: string;
  onClick: () => void;
}

export class Chat extends Block {
  constructor({ id, chatName, lastMessage, avatar, onClick }: ChatProps) {
    super({ id, chatName, lastMessage, avatar, events: { click: onClick }});
  }

  componentDidMount() {
    
  }

  render() {
    return `<li class="chat-list__item" uuid="{{ id }}">
      <div class="image-wrapper">
        <img src="{{ avatar }}" width="50" class="image-wrapper__image image-round" />
      </div>
      <div>
        <div>
          <p class="chat-list__item-name">{{ chatName }}</p>
        </div>
        <div>
          <p class="chat-list__item-message">{{ lastMessage }}</p>
        </div>
      </div>
    </li>`;
  }
};
