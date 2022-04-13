import BaseAPI from './BaseAPI';

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

export type UserData = Omit<SignUpParams, 'password'> & { avatar: string; display_name: string; };

export class AuthAPI extends BaseAPI {
  constructor() {
    super('auth');
  }

  signin(data: SignInParams): Promise<void> {
    return this.http.post('signin', {...data});
  }

  signup(data: SignUpParams): Promise<{ id: number }> {
    return this.http.post('signup', {...data});
  }

  logout(): Promise<void> {
    return this.http.post('logout');
  }

  getUserInfo(): Promise<UserData> {
    return this.http.get('user');
  }

  delete: undefined;
  create: undefined;
  update: undefined;
}
