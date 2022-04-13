export default `
  <main class="form">
    <form uuid="{{ id }}">
      <ul class="form-header">
        <li class="form-header__item">
          {{{ Button
            text="Вход"
            type="button"
            cssClass="form-header__button form-header__button_active"
          }}}
        </li>
        <li class="form-header__item">
          {{{ Button
            text="Регистрация"
            type="button"
            cssClass="form-header__button"
            onClick=signupButtonClick
          }}}
        </li>
      </ul>
      <div class="form-field">
        <label class="form-field__label">Логин</label>
        {{{ Input
          type="text"
          ref="login"
          cssClass="form-field__input"
          onBlur=loginValidation
        }}}
        <label id="login_tooltip" class="form-field__input-tooltip">
          Логин должен содержать только буквы и цифры и должен быть длиной от 3 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Пароль</label>
        {{{ Input
          type="password"
          ref="password"
          cssClass="form-field__input"
          onBlur=passwordValidation
        }}}
        <label id="password_tooltip" class="form-field__input-tooltip">
          Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
        </label>
      </div>
      <div class="form-controls">
        {{{ Button
          text="Авторизоваться"
          type="button"
          cssClass="form-controls__button primary"
          onClick=signinButtonClick
        }}}
      </div>
    </form>
  </main>
`;