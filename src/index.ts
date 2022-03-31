import {
  Auth,
  Registration
} from './pages/index';
import { Router } from './router/Router';
import { Test } from './test';
import registerComponent from './utils/registerComponent';
import Block from './components/Block';

import './css/index.scss';

const components = require('./components/**/index.ts') as {
  [key: string]: { default: typeof Block }
};

Object.values(components).forEach((component) => {
  registerComponent(component.default);
});

const router = new Router('#root');
router
  .use('/', Auth)
  .use('/sign-up', Registration)
  .start();
