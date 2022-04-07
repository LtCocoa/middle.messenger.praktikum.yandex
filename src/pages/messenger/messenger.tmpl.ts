export default `
  <main class="chat">
    <div class="chat-left-sidebar">
      <div class="search-panel">
        <input class="search-panel__input" type="text" placeholder="Поиск" />
      </div>
      <ul class="chat-list">
        {{#each chats}}
          <li class="chat-list__item">
            <div class="image-wrapper">
              <img src=avatar width="50" class="image-wrapper__image image-round" />
            </div>
            <div>
              <div>
                <p class="chat-list__item-name">{{ title }}</p>
              </div>
              <div>
                <p class="chat-list__item-message">{{ lastMessage }}</p>
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
            <p class="user-info__name">{{user.profile.first_name}}</p>
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
