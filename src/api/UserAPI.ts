import BaseAPI from './BaseAPI';

type UserData = {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

type ChangePasswordData = {
  oldPassword: string;
  newPassword: string;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('user');
  }

  uploadAvatar(formData: FormData) {
    return this.http.putFile('profile/avatar', formData);
  }

  changeUserData(data: UserData) {
    return this.http.put('profile', data);
  }

  changeUserPassword(passwordData: ChangePasswordData) {
    return this.http.put('password', passwordData);
  }
}
