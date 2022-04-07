export default `
  <main class="profile">
    <form uuid="{{ id }}">
      <div class="profile-image-wrapper">
        <img src="{{image}}" width="150" class="profile-image-wrapper__image" />
      </div>
      <h1 class="profile__name">Имя</h1>
      <div class="profile-info">
        <div class="profile-info-field">
          <label class="profile-info-field__label">Почта</label>
          {{{ Input
            type="email"
            ref="email"
            cssClass="profile-info-field__input"
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Логин</label>
          {{{ Input
            type="text"
            ref="login"
            cssClass="profile-info-field__input"
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Имя</label>
          {{{ Input
            type="text"
            ref="first_name"
            cssClass="profile-info-field__input"
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Фамилия</label>
          {{{ Input
            type="text"
            ref="second_name"
            cssClass="profile-info-field__input"
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Имя в чате</label>
          {{{ Input
            type="text"
            ref="display_name"
            cssClass="profile-info-field__input"
          }}}
        </div>
        <div class="profile-info-field">
          <label class="profile-info-field__label">Телефон</label>
          {{{ Input
            type="tel"
            ref="phone"
            cssClass="profile-info-field__input"
          }}}
        </div>
      </div>
      <div class="profile-controls">
        <button class="profile-controls__button" type="button">Изменить пароль</button>
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
