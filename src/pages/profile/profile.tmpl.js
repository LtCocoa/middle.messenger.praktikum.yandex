const template = `
  <main class="profile">
    <div class="profile-image-wrapper">
      <img src="{{image}}" width="150" class="profile-image-wrapper__image" />
    </div>
    <h1 class="profile__name">Имя</h1>
    <div class="profile-info">
      <div class="profile-info-field">
        <label class="profile-info-field__label">Почта</label>
        <input class="profile-info-field__input" type="email" name="email" />
      </div>
      <div class="profile-info-field">
        <label class="profile-info-field__label">Логин</label>
        <input class="profile-info-field__input" type="text" name="login" />
      </div>
      <div class="profile-info-field">
        <label class="profile-info-field__label">Имя</label>
        <input class="profile-info-field__input" type="text" name="first_name" />
      </div>
      <div class="profile-info-field">
        <label class="profile-info-field__label">Фамилия</label>
        <input class="profile-info-field__input" type="text" name="second_name" />
      </div>
      <div class="profile-info-field">
        <label class="profile-info-field__label">Имя в чате</label>
        <input class="profile-info-field__input" type="text" name="display_name" />
      </div>
      <div class="profile-info-field">
        <label class="profile-info-field__label">Телефон</label>
        <input class="profile-info-field__input" type="tel" name="phone" />
      </div>
    </div>
    <div class="profile-controls">
      <button class="profile-controls__button">Изменить пароль</button>
      <button class="profile-controls__button red">Выйти</button>
    </div>
  </main>
`;

export default template;