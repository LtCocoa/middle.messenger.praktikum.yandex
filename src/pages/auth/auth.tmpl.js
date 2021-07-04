import Templator from '../../templator/Templator';
import './auth.css';

const template = `
  <main class="form">
    <h1 class="form__caption">Вход</h1>
    <div class="form__field">
      <label class="form-field__label">Логин</label>
      <input class="input text" type="text" name="login" />
    </div>
    <div class="form__field">
      <label class="form-field__label">Пароль</label>
      <input class="input text" type="password" name="password" />
    </div>
    <button class="input button primary">Авторизоваться</button>
    <button class="input button">Нет аккаунта?</button>
  </main>
`;

const authTemplate = new Templator(template);
export default renderedAuthTemplate = authTemplate.compile();