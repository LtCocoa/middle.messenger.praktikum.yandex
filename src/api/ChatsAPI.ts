import BaseAPI from './BaseAPI';
import { UserData } from './AuthAPI';

type ChatsData = {
  id: string,
  title: string,
  unread_count: number,
  last_message: MessageData
}

 type MessageData = {
   user: UserData,
   time: string,
   content: string
 }

export class ChatsAPI extends BaseAPI {
  constructor() {
    super('chats');
  }

  fetchChats(): Promise<Array<ChatsData>> {
    return this.http.get('');
  }

  createChat(chatTitle: string): Promise<unknown> {
    return this.http.post('', {
      title: chatTitle
    });
  }

  openWebSocket(chatID) {
    const socket = new WebSocket('');
  }

  fetchChatToken(chatID: number): Promise<unknown> {
    return this.http.post(`token/${chatID}`);
  }
}
