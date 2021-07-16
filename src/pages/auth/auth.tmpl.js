const template = `
  <main class="form">
    <ul class="form-header">
      <li class="form-header__item">
        <h1 class="form-header__caption form-header__caption_active">Вход</h1>
      </li>
      <li class="form-header__item">
        <h1 class="form-header__caption">Регистрация</h1>
      </li>
    </ul>
    <div class="form-field">
      <label class="form-field__label">Логин</label>
      <input class="form-field__input" type="text" name="login" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Пароль</label>
      <input class="form-field__input" type="password" name="password" />
    </div>
    <div class="form-controls">
      <button class="form-controls__button primary" type="button">Авторизоваться</button>
      <button class="form-controls__button" type="button">Нет аккаунта?</button>
    </div>
  </main>
`;

export default template;