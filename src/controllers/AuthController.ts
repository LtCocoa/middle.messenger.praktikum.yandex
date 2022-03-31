import { AuthAPI } from '../api/auth-api';
import { Router } from '../router/Router';

export type SignInFormData = {
  login: string;
  password: string
}

export type SignUpFormData = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  repeat_password: string,
  phone: string
}

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  public signin(data: SignInFormData) {
    this.api.signin(data)
      .then(() => {
        Router.__instance.go('/messenger');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public signup(data: SignUpFormData) {
    const { repeat_password, ...params } = data;
    this.api.signup(params)
      .then(() => {
        Router.__instance.go('/messenger');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public logout() {
    this.api.logout()
      .then(() => {
        Router.__instance.go('/');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public getUserInfo() {
    return this.api.getUserInfo()
      .then(info => {
        return JSON.parse(info.response);
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }
}

export default new AuthController();
