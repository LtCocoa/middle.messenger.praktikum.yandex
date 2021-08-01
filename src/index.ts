// import authTemplate from './pages/auth/auth.tmpl';
// import registerTemplate from './pages/registration/registration';
// import profileTemplate from './pages/profile/profile';
// import chatTemplate from './pages/chat/chat';
// import error404Template from './pages/errors/404';
// import error500Template from './pages/errors/500';

import Button from './components/Button';
import Handlebars from 'handlebars';

import './css/index.scss';

const root: HTMLElement | null = document.querySelector('#root');
// root.innerHTML = chatTemplate;

const button = new Button({
  text: 'click',
  events: {
    click: function() {
      console.log(this);
    }
  }
});

setTimeout(() => {
  button.setProps({
    text: 'OK'
  });
}, 3000);

const tmpl = `
  <div class="wrapper">
    {{{ button }}}
    <div>
      <span>div</span>
    </div>
  </div>
`;

const template = Handlebars.compile(tmpl);

root?.innerHTML = template({ button: button.getHTML() });

// root?.appendChild(c);
