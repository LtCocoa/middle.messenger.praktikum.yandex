import { ChatsAPI } from '../api/ChatsAPI';
import { store } from '../store';
import { addMessage, setChat, setMessages, setChatUsers } from '../store/chat';

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

  public selectChat(chat: any) {
    store.dispatch(setChat(chat));
    return this.fetchChatToken().then(() => {
      this.openWebSocket();
      this.fetchChatUsers(chat.id);
    });
  }

  protected fetchChatToken(): Promise<unknown> {
    return this.api.fetchChatToken(store.getState().chat.chatData.id).then(({ token }) => {
      this.chatToken = token;
      return Promise.resolve();
    });
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

  public fetchChatUsers(chatId: number) {
    return this.api.fetchChatUsers(chatId).then(users => {
      store.dispatch(setChatUsers(users));
    });
  }

  public sendMessage(message: string) {
    this.api.sendMessage(message);
  }

  public addUserToChat(userId: number, chatId: number) {
    const users = [userId];
    return this.api.addUserToChat(users, chatId).then(() => {
      this.fetchChatUsers(chatId);
    });
  }
}

export default new ChatsController();
