const template = `
  <main class="form">
    <div class="form-header">
      <h1 class="form-header__caption active">Вход</h1>
      <h1 class="form-header__caption">Регистрация</h1>
    </div>
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

export default template;