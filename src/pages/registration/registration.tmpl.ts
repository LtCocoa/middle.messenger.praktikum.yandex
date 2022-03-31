export default `
  <main class="form">
    <form uuid="{{ id }}">
      <ul class="form-header">
        <li class="form-header__item">
          {{{ Button
            text="Вход"
            type="button"
            cssClass="form-header__button"
            onClick=onLoginButtonClick
          }}}
        </li>
        <li class="form-header__item">
          {{{ Button
            text="Регистрация"
            type="button"
            cssClass="form-header__button form-header__button_active"
          }}}
        </li>
      </ul>
      <div class="form-field">
        <label class="form-field__label">Почта</label>
        {{{ Input
          type="email"
          ref="email"
          cssClass="form-field__input"
          onBlur=emailValidation
        }}}
        <label id="email_tooltip" class="form-field__input-tooltip">
          Неверно указан почтовый адрес
        </label>
      </div>
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
        <label class="form-field__label">Имя</label>
        {{{ Input
          type="text"
          ref="first_name"
          cssClass="form-field__input"
          onBlur=firstNameValidation
        }}}
        <label id="first_name_tooltip" class="form-field__input-tooltip">
          Имя должно состоять только из букв должно быть длиной от 2 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Фамилия</label>
        {{{ Input
          type="text"
          ref="second_name"
          cssClass="form-field__input"
          onBlur=secondNameValidation
        }}}
        <label id="second_name_tooltip" class="form-field__input-tooltip">
          Фамилия должна состоять только из букв должно быть длиной от 2 до 15 символов
        </label>
      </div>
      <div class="form-field">
        <label class="form-field__label">Телефон</label>
        {{{ Input
          type="tel"
          ref="phone"
          cssClass="form-field__input"
          onBlur=phoneValidation
        }}}
        <label id="phone_tooltip" class="form-field__input-tooltip">
          Номер телефона должен содержать только цифры и быть длиной 11 сиволов
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
      <div class="form-field">
        <label class="form-field__label">Пароль (еще раз)</label>
        {{{ Input
          type="password"
          ref="repeat_password"
          cssClass="form-field__input"
          onBlur=repeatPasswordValidation
        }}}
        <label id="repeat_password_tooltip" class="form-field__input-tooltip">
          Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
        </label>
      </div>
      <div class="form-controls">
        {{{ Button
          text="Зарегистрироваться"
          type="button"
          cssClass="form-controls__button primary"
          onClick=loginButtonClick
        }}}
      </div>
    </form>
  </main>
`;
