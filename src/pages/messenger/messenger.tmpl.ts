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
      <div class="create-chat">
        {{{ Button
          text="Создать чат"
          cssClass="form-controls__button primary"
          onClick=openNewChatModal
        }}}
      </div>
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
                <div class="message-list-item {{ ../isOwnMessage this}}">
                  <div class="message-list-item__content">
                    <p class="message-author">{{../messageAuthor this}}</p>
                    <p class="message-text">{{content}}</p>
                  </div>
                </div>
              {{/each}}
            </div>
          </div>
          <div class="messenger-area__footer">
            {{{ Input type="text" ref="messageText" cssClass="message-input" }}}
            {{{ Button text="Send" onClick=sendMessage cssClass="send-button" }}}
          </div>
        </div>
      {{else}}
        <div class="chat-main__select-chat">
          Выберите чат чтобы отправить сообщение
        </div>
      {{/if}}
    </div>
    {{#if chat.chatData}}
      <div class="chat-right-sidebar">
        <ul class="chat-user-list">
          {{#each chat.chatUsers}}
            <li class="chat-user">
              <img src="{{../imageUrl this.avatar}}" width="50" class="chat-user__avatar">
              <p class="chat-user__name">{{display_name}}</p>
            </li>
          {{/each}}
        </ul>
        <div class="chat-right-sidebar__footer">
          {{{ Button
            text="Добавить пользователя"
            cssClass="form-controls__button primary add-user"
            onClick=openAddUserModal
          }}}
        </div>
      </div>
    {{/if}}
    <dialog class="modal" id="new_chat_modal">
      <div class="form-field">
        <label class="form-field__label">Название чата</label>
        {{{ Input
          type="text"
          ref="title"
          cssClass="form-field__input"
        }}}
      </div>
      {{{ Button
        text="Создать"
        type="button"
        cssClass="form-controls__button primary"
        onClick=createChat
      }}}
      {{{ Button
        text="Отмена"
        type="button"
        cssClass="form-controls__button"
        onClick=closeNewChatModal
      }}}
    </dialog>
    <dialog class="modal" id="add_user_modal">
      <div class="form-field">
        <label class="form-field__label">id пользователя</label>
        {{{ Input
          type="text"
          ref="userId"
          cssClass="form-field__input"
        }}}
      </div>
      {{{ Button
        text="Добавить"
        type="button"
        cssClass="form-controls__button primary"
        onClick=addUser
      }}}
      {{{ Button
        text="Отмена"
        type="button"
        cssClass="form-controls__button"
        onClick=closeAddUserModal
      }}}
    </dialog>
  </main>
`;
