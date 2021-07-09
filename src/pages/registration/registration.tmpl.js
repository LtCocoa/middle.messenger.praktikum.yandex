const template = `
  <main class="form">
    <div class="form-header">
      <h1 class="form-header__caption">Вход</h1>
      <h1 class="form-header__caption active">Регистрация</h1>
    </div>
    <div class="form-field">
      <label class="form-field__label">Почта</label>
      <input class="form-field__input" type="email" name="email" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Логин</label>
      <input class="form-field__input" type="text" name="login" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Имя</label>
      <input class="form-field__input" type="text" name="first_name" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Фамилия</label>
      <input class="form-field__input" type="text" name="second_name" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Телефон</label>
      <input class="form-field__input" type="tel" name="phone" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Пароль</label>
      <input class="form-field__input" type="password" name="password" />
    </div>
    <div class="form-field">
      <label class="form-field__label">Пароль (еще раз)</label>
      <input class="form-field__input" type="password" name="password" />
    </div>
    <div class="form-controls">
      <button class="form-controls__button primary">Зарегистрироваться</button>
      <button class="form-controls__button">Войти</button>
    </div>
  </main>
`;

export default template;