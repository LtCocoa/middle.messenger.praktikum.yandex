import { UserAPI } from '../api/UserAPI';
import { Router } from '../router/Router';
import { store } from '../store';
import { addMessage, setChat, setMessages } from '../store/chat';

class UserController {
  private api: UserAPI;
  private chatToken: string;

  constructor() {
    this.api = new UserAPI();
  }

  uploadAvatar(formData: FormData): Promise<unknown> {
    return this.api.uploadAvatar(formData);
  }

  changeUserData(data) {
    return this.api.changeUserData(data);
  }

  changeUserPassword(data) {
    return this.api.changeUserPassword(data);
  }
}

export default new UserController();
