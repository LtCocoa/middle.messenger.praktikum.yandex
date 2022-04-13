import {
  Auth,
  Registration,
  Messenger,
  UserProfile
} from './pages/index';
import { Router } from './router/Router';
import registerComponent from './utils/registerComponent';
import Block from './components/Block';
import AuthController from './controllers/AuthController';

import './css/index.scss';

const components = require('./components/**/index.ts') as {
  [key: string]: { default: typeof Block }
};

Object.values(components).forEach((component) => {
  registerComponent(component.default);
});

const router = new Router();

AuthController.getUserInfo()
  .then(() => {
    router
      .use('/', Auth)
      .use('/sign-up', Registration)
      .use('/messenger', Messenger)
      .use('/profile', UserProfile)
      .start();
  });
