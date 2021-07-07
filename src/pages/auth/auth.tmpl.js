import Templator from '../../templator/Templator';
import './auth.css';

const template = `
  <main class="form">
    <h1 class="form__caption">Вход</h1>
    <div class="form-field">
      <label class="form-field__label">Логин</label>
      <input class="form-field__input" type="text" name="login" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Пароль</label>
      <input class="form-field__input" type="password" name="password" />
    </div>
    <div class="form-controls">
      <button class="form-controls__button primary">Авторизоваться</button>
      <button class="form-controls__button">Нет аккаунта?</button>
    </div>
  </main>
`;

const authTemplate = new Templator(template);
const renderedAuthTemplate = authTemplate.compile();
export default renderedAuthTemplate;