import authTemplate from './pages/auth/auth.tmpl';
import registerTemplate from './pages/registration/registration.tmpl';
import profileTemplate from './pages/profile/profile.tmpl';
import './index.scss';

const root = document.querySelector('#root');
root.innerHTML = authTemplate;
