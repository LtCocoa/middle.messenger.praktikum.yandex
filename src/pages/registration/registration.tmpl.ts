export default `
  <main class="form">
    <form>
      <ul class="form-header">
        <li class="form-header__item">
          <a href="/" class="form-header__caption">Вход</a>
        </li>
        <li class="form-header__item">
          <span class="form-header__caption form-header__caption_active">Регистрация</span>
        </li>
      </ul>
      <div class="form-field">
        <label class="form-field__label">Почта</label>
        {{{ emailInput }}}
        <label id="email_tooltip" class="form-field__input-tooltip">
          Неверно указан почтовый адрес
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Логин</label>
        {{{ loginInput }}}
        <label id="login_tooltip" class="form-field__input-tooltip">
          Логин должен содержать только буквы и цифры и должен быть длиной от 3 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Имя</label>
        {{{ firstNameInput }}}
        <label id="first_name_tooltip" class="form-field__input-tooltip">
          Имя должно состоять только из букв должно быть длиной от 2 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Фамилия</label>
        {{{ secondNameInput }}}
        <label id="second_name_tooltip" class="form-field__input-tooltip">
          Фамилия должна состоять только из букв должно быть длиной от 2 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Телефон</label>
        {{{ phoneInput }}}
        <label id="phone_tooltip" class="form-field__input-tooltip">
          Номер телефона должен содержать только цифры и быть длиной 11 сиволов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Пароль</label>
        {{{ passwordInput }}}
        <label id="password_tooltip" class="form-field__input-tooltip">
          Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Пароль (еще раз)</label>
        {{{ repeatPasswordInput }}}
        <label id="repeat_password_tooltip" class="form-field__input-tooltip">
          Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
        </label>
      </div>
      <div class="form-controls">
        {{{ registerButton }}}
      </div>
    </form>
  </main>
`;
