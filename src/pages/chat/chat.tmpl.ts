export default `
  <main class="chat">
    <div class="chat-left-sidebar">
      <div class="search-panel">
        <input class="search-panel__input" type="text" placeholder="Поиск" />
      </div>
      <ul class="chat-list">
        {{#each contacts}}
          <li class="chat-list__item">
            <div class="image-wrapper">
              <img src="{{imgSrc}}" width="50" class="image-wrapper__image image-round" />
            </div>
            <div>
              <div>
                <p class="chat-list__item-name">{{this.name}}</p>
              </div>
              <div>
                <p class="chat-list__item-message">{{this.message}}</p>
              </div>
            </div>
          </li>
        {{/each}}
      </ul>
      <div class="chat-footer">
        <div class="image-wrapper">
          <img src="{{image}}" width="50" class="image-round" />
        </div>
        <div class="user-info">
          <div>
            <p class="user-info__name">{{user.name}}</p>
          </div>
          <div>
            <p class="user-info__status">{{user.status}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-messages">
      <div class="chat-messages__select-chat">
        Выберите чат чтобы отправить сообщение
      </div>
    </div>
  </main>
`;
