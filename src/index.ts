import {
  Auth,
  Registration,
  Chats,
  UserProfile,
  Error404,
  Error500
} from './pages/index';
import { Router } from './router/Router';

import './css/index.scss';

const router = new Router('#root');
router
  .use('/', Auth)
  .use('/sign-up', Registration)
  .use('/messenger', Chats)
  .use('/settings', UserProfile)
  .use('/404', Error404)
  .use('/500', Error500)
  .start();
