export default `
  <main class="profile">
    <form uuid="{{ id }}">
      <div class="profile-avatar">
        {{{ Input
          elementId="avatar"
          type="file"
          name="avatar"
          cssClass="profile-avatar__input"
          accept="image/*"
          onInput=saveUserAvatar
        }}}
        <img src="{{image}}" width="150" class="profile-avatar__image" />
      </div>
      <h1 class="profile__name">{{user.display_name}}</h1>
      <div class="profile-info">
        <div class="profile-info-field">
          <label class="profile-info-field__label">Почта</label>
          {{{ Input
            type="email"
            ref="email"
            cssClass="profile-info-field__input"
            value=user.email
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Логин</label>
          {{{ Input
            type="text"
            ref="login"
            cssClass="profile-info-field__input"
            value=user.login
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Имя</label>
          {{{ Input
            type="text"
            ref="first_name"
            cssClass="profile-info-field__input"
            value=user.first_name
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Фамилия</label>
          {{{ Input
            type="text"
            ref="second_name"
            cssClass="profile-info-field__input"
            value=user.second_name
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Имя в чате</label>
          {{{ Input
            type="text"
            ref="display_name"
            cssClass="profile-info-field__input"
            value=user.display_name
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Телефон</label>
          {{{ Input
            type="tel"
            ref="phone"
            cssClass="profile-info-field__input"
            value=user.phone
          }}}
        </div>
      </div>
      <div class="profile-controls">
        {{{ Button
          text="Сохранить изменения"
          cssClass="profile-controls__button"
          type="button"
          onClick=saveUserData
        }}}
        {{{ Button
          text="Изменить пароль"
          cssClass="profile-controls__button"
          type="button"
          onClick=showModal
        }}}
        {{{ Button
          text="Выйти"
          type="button"
          cssClass="profile-controls__button red"
          onClick=logoutButtonClick
        }}}
      </div>

      <dialog class="modal" id="modal">
        <div class="form-field">
          <label class="form-field__label">Старый пароль</label>
          {{{ Input
            type="password"
            ref="oldPassword"
            cssClass="form-field__input"
            onBlur=passwordValidation
          }}}
          <label id="password_tooltip" class="form-field__input-tooltip">
            Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
          </label>
        </div>
        <div class="form-field">
          <label class="form-field__label">Пароль</label>
          {{{ Input
            type="password"
            ref="newPassword"
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
            ref="repeatNewPassword"
            cssClass="form-field__input"
            onBlur=repeatPasswordValidation
          }}}
          <label id="repeat_password_tooltip" class="form-field__input-tooltip">
            Пароль должен содержать только буквы и цифры и должен быть длиной от 6 до 15 символов
          </label>
        </div>
        {{{ Button
          text="Сменить пароль"
          type="button"
          cssClass="form-controls__button primary"
          onClick=changePassword
        }}}

        {{{ Button
          text="Отмена"
          type="button"
          cssClass="form-controls__button"
          onClick=cancelChangePassword
        }}}
      </dialog>
    </form>
  </main>
`;
