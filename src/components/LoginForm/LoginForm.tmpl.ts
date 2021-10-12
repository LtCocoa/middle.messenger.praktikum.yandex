export default `
  <form uuid="{{ id }}">
    <ul class="form-header">
      <li class="form-header__item">
        <button type="button" class="form-header__button form-header__button_active">Вход</button>
      </li>
      <li class="form-header__item">
        {{{ registrationButton }}}
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
`;
