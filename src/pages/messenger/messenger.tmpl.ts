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
          <img src="{{user.profile.avatar}}" width="50" class="image-round" />
        </div>
        <div class="user-info">
          <div>
            <a href="/profile" class="user-info__name">{{user.profile.first_name}}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="chat-main">
      {{#if chat.chatData}}
        <div class="messenger-area">
          <div class="messenger-area__header">
            {{ chat.chatData.title }}
          </div>
          <div class="message-list-wrapper">
            <div class="message-list">
              {{#each chat.messages}}
                <div class="message-list__item {{ ../isOwnMessage this}}">
                  <p class="message-text">{{content}}</p>
                </div>
              {{/each}}
            </div>
          </div>
          <div class="messenger-area__footer">
            {{{ Input type="text" ref="messageText" cssClass="input" }}}
            {{{ Button text="Send" onClick=sendMessage cssClass="send-button" }}}
          </div>
        </div>
      {{else}}
        <div class="chat-main__select-chat">
          Выберите чат чтобы отправить сообщение
        </div>
      {{/if}}
    </div>
  </main>
`;
