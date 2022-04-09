import { ChatsAPI, ChatsData } from '../api/ChatsAPI';
import { Router } from '../router/Router';
import { store } from '../store';
import { addMessage, setChat, setMessages } from '../store/chat';

class ChatsController {
  private api: ChatsAPI;
  private chatToken: string;

  constructor() {
    this.api = new ChatsAPI();
  }

  public fetchChats() {
    return this.api.fetchChats();
  }

  public createChat(chatTitle: string): Promise<unknown> {
    return this.api.createChat(chatTitle);
  }

  public async selectChat(chat: any): Promise<void> {
    store.dispatch(setChat(chat));
    await this.fetchChatToken();
    this.openWebSocket();
  }

  protected async fetchChatToken() {
    const { token } = await this.api.fetchChatToken(store.getState().chat.chatData.id);
    this.chatToken = token;
  }

  protected openWebSocket() {
    const {user, chat} = store.getState();
    this.api.openWebSocket(user.profile.id, chat.chatData.id, this.chatToken, this.onReceiveMessage);
  }

  onReceiveMessage = (event: any): void => {
    const data = JSON.parse(event.data);
    
    if (data.length) {
      store.dispatch(setMessages(data.reverse()));
    } else {
      store.dispatch(addMessage(data));
    }
  }

  public sendMessage(message: string) {
    this.api.sendMessage(message);
  }
}

export default new ChatsController();
