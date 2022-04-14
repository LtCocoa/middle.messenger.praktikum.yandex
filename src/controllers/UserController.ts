import { UserAPI } from '../api/UserAPI';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  uploadAvatar(formData: FormData): Promise<unknown> {
    return this.api.uploadAvatar(formData);
  }

  changeUserData(data: any) {
    return this.api.changeUserData(data);
  }

  changeUserPassword(data: any) {
    return this.api.changeUserPassword(data);
  }
}

export default new UserController();
