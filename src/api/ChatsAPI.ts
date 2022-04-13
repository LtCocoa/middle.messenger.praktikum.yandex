import BaseAPI from './BaseAPI';
import { UserData } from './AuthAPI';

export type ChatsData = {
  id: string,
  title: string,
  unread_count: number,
  last_message: MessageData
}

export type MessageData = {
  user: UserData,
  time: string,
  content: string
}

export class ChatsAPI extends BaseAPI {
  private socket: WebSocket;

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

  openWebSocket(chatID: number, userID: number, token: string, getMessage: (event: any) => void) {
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${chatID}/${userID}/${token}`);

    this.socket.addEventListener('open', () => {
      this.socket.send(JSON.stringify({
        content: '0',
        type: 'get old',
      }));
    });

    this.socket.addEventListener('close', event => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }
    
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('message', getMessage);

    this.socket.addEventListener('error', event => {
      console.log('Ошибка', event.message);
    });
  }

  fetchChatToken(chatID: number): Promise<any> {
    return this.http.post(`token/${chatID}`);
  }

  fetchChatUsers(chatId: number) {
    return this.http.get(`${chatId}/users`);
  }

  sendMessage(message: string) {
    this.socket.send(JSON.stringify({
      type: 'message',
      content: message
    }));
  }

  addUserToChat(users: Array<number>, chatId: number) {
    return this.http.put('users', {
      users,
      chatId
    });
  }
}
