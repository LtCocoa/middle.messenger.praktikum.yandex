import { AuthAPI, UserData } from '../api/AuthAPI';
import { Router } from '../router/Router';
import { store } from '../store';
import { deleteUser, setError, setUser } from '../store/user';

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
        this.getUserInfo().then(() => Router.go('/messenger'));
      })
      .catch(error => {
        store.dispatch(setError(error as { reason: string }));
      });
  }

  public signup(data: SignUpFormData) {
    const { repeat_password, password, ...params } = data;
    if (repeat_password !== password) {
      return Promise.reject('Пароли не совпадают');
    }
    this.api.signup({ ...params, password })
      .then((userID) => {
        this.api.getUserInfo().then(() => Router.go('/messenger'));
      })
      .catch(error => {
        console.warn(error.reason);
      });
  }

  public logout() {
    this.api.logout()
      .then(() => {
        store.dispatch(deleteUser());
        Router.go('/');
      })
      .catch(error => {
        store.dispatch(setError(error as { reason: string }));
      });
  }

  public getUserInfo(): Promise<UserData | void> {
    return this.api.getUserInfo()
      .then(user => {
        user.avatar = `${this.api.http.baseUrl}/resources/${user.avatar}`;
        store.dispatch(setUser(user));
        return user;
      })
      .catch(error => {
        Router.go('/');
        store.dispatch(deleteUser());
      });
  }
}

export default new AuthController();
