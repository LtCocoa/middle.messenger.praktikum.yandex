import { ChatsAPI } from '../api/ChatsAPI';
import { Router } from '../router/Router';
import { store } from '../store';
import { deleteUser, setError, setUser } from '../store/user';

class ChatsController {
  private api: ChatsAPI;

  constructor() {
    this.api = new ChatsAPI();
  }

  public fetchChats() {
    return this.api.fetchChats();
  }

  public createChat(chatTitle: string): Promise<unknown> {
    return this.api.createChat(chatTitle);
  }

  public fetchChatToken(chatID: number): Promise<unknown> {
    return this.api.fetchChatToken(chatID);
  }
}

export default new ChatsController();
