import auth from './pages/auth/auth';
import registration from './pages/registration/registration';
import profile from './pages/profile/profile';
import chat from './pages/chat/chat';
import error404 from './pages/errors/404';
import error500 from './pages/errors/500';

import './css/index.scss';

const root: HTMLElement | null = document.querySelector('#root');

root?.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  const inputs = Array.from(root.querySelectorAll('input'));
  const formData = inputs.reduce((data: any, input: HTMLInputElement) => {
    data[input['name']] = input.value;
    return data;
  }, {});
  console.log(formData);
});

const setPage = (pageTmpl: string): void => {
  if (root) {
    root.innerHTML = pageTmpl;
  }
};

switch (window.location.pathname) {
  case '/':
    setPage(auth);
    break;
  case '/registration':
    setPage(registration);
    break;
  case '/profile':
    setPage(profile);
    break;
  case '/chat':
    setPage(chat);
    break;
  case '/500':
    setPage(error500);
    break;
  default:
    setPage(error404);
    break;
}
