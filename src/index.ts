import {
  Auth,
  Registration,
  Messenger,
  UserProfile
} from './pages/index';
import { Router } from './router/Router';
import registerComponent from './utils/registerComponent';
import AuthController from './controllers/AuthController';

import './css/index.scss';

const Button = require('./components/Button/index.ts');
const Link = require('./components/Link/index.ts');
const Input = require('./components/Input/index.ts');
const Chat = require('./components/Chat/index.ts');

const components = {
  Button,
  Link,
  Input,
  Chat
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
