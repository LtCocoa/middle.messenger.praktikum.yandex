import BaseAPI from './BaseAPI';
import { UserData } from './AuthAPI';

export class UserAPI extends BaseAPI {
  constructor() {
    super('user');
  }

  uploadAvatar(formData: FormData) {
    return this.http.putFile('profile/avatar', formData);
  }
}
