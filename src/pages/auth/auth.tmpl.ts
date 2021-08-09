const template = `
  <main class="form">
    <form>
      <ul class="form-header">
        <li class="form-header__item">
          <span class="form-header__caption form-header__caption_active">Вход</span>
        </li>
        <li class="form-header__item">
          <a href="registration" class="form-header__caption">Регистрация</a>
        </li>
      </ul>
      <div class="form-field">
        <label class="form-field__label">Логин</label>
        {{{ loginInput }}}
        <label id="login_tooltip" class="form-field__input-tooltip">
          Логин должен содержать только буквы и цифры и должен быть длиной от 3 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Пароль</label>
        {{{ passwordInput }}}
        <label id="password_tooltip" class="form-field__input-tooltip">
          Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
        </label>
      </div>
      <div class="form-controls">
        {{{ loginButton }}}
      </div>
    </form>
  </main>
`;

export default template;