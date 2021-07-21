import authTemplate from './pages/auth/auth.tmpl';
import registerTemplate from './pages/registration/registration';
import profileTemplate from './pages/profile/profile';
import chatTemplate from './pages/chat/chat';
import error404Template from './pages/errors/404';
import error500Template from './pages/errors/500';
import ChatWindow from './components/ChatWindow';

import './css/index.scss';

const root: HTMLElement = document.querySelector('#root');
root.innerHTML = chatTemplate;

const chat = new ChatWindow();
root.innerHTML = chat.render();
console.log(chat.props.button);
