import authTemplate from './pages/auth/auth.tmpl';
import registerTemplate from './pages/registration/registration.tmpl';
import profileTemplate from './pages/profile/profile.tmpl';
import './index.css';

const root = document.querySelector('#root');
root.innerHTML = profileTemplate;

console.log('hello world');