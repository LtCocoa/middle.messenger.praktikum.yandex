export default `
  <main class="profile">
    <form uuid="{{ id }}">
      <div class="profile-avatar">
        <input id="avatar" type="file" name="avatar" accept="image/*" class="profile-avatar__input">
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
        }}}
        {{{ Button
          text="Выйти"
          type="button"
          cssClass="profile-controls__button red"
          onClick=logoutButtonClick
        }}}
      </div>
    </form>
  </main>
`;
