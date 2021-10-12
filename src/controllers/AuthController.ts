import { AuthAPI } from '../api/auth-api';
import { Router } from '../router/Router';

const authAPI = new AuthAPI();

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

export class AuthController {
  public signin(data: SignInFormData) {
    authAPI.signin(data)
      .then(() => {
        Router.__instance.go('/messenger');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public signup(data: SignUpFormData) {
    const { repeat_password, ...params } = data;
    authAPI.signup(params)
      .then(() => {
        Router.__instance.go('/messenger');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public logout() {
    authAPI.logout()
      .then(() => {
        Router.__instance.go('/');
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public getUserInfo() {
    return authAPI.getUserInfo()
      .then(info => {
        return JSON.parse(info.response);
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }
}
