import Block from '../Block';
import { ComponentProps } from '../Types';
import { ChatsData } from '../../api/ChatsAPI';
import ChatsController from '../../controllers/ChatsController';

interface ChatProps extends ComponentProps {
  chat: ChatsData
}

export class Chat extends Block {
  constructor({ chat }: ChatProps) {
    const selectChat = () => {
      ChatsController.selectChat(this.props.chat);
    };

    super({ chat, events: { click: selectChat } });
  }

  render() {
    return `<li class="chat-list__item">
      <div class="image-wrapper">
        <img src="{{ chat.avatar }}" width="50" class="image-wrapper__image image-round" />
      </div>
      <div>
        <div>
          <p class="chat-list__item-name">{{ chat.title }}</p>
        </div>
        <div>
          <p class="chat-list__item-message">{{ lastMessage }}</p>
        </div>
      </div>
    </li>`;
  }
};
