export default `
  <main class="chat">
    <div class="chat-left-sidebar">
      <div class="search-panel">
        <input class="search-panel__input" type="text" placeholder="Поиск" />
      </div>
      <ul class="chat-list">
        {{#each chats}}
          {{{ Chat
            chat=this
          }}}
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
      {{#if chat.chatData}}
      <div>
        <ul>
          {{#each chat.messages}}
            <li>{{content}}</li>
          {{/each}}
        </ul>
        {{{ Input type="text" ref="messageText" }}}
        {{{ Button text="Send" onClick=sendMessage }}}
      </div>
      {{else}}
      <div class="chat-messages__select-chat">
        Выберите чат чтобы отправить сообщение
      </div>
      {{/if}}
    </div>
  </main>
`;
