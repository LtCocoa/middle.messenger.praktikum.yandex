import { HTTPTransport } from '../utils/HTTPTransport';
import { BaseAPI } from './base-api';

const chatAPIInstance = new HTTPTransport('api/v2/auth');

export type SignInParams = {
  login: string;
  password: string
}

export type SignUpParams = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export class AuthAPI extends BaseAPI {
  signin(data: SignInParams): Promise<XMLHttpRequest> {
    return chatAPIInstance.post('signin', {...data});
  }

  signup(data: SignUpParams): Promise<XMLHttpRequest> {
    return chatAPIInstance.post('signup', {...data});
  }

  logout() {
    return chatAPIInstance.post('logout');
  }

  getUserInfo() {
    return chatAPIInstance.get('user');
  }
}
