import template from './messenger.tmpl';
import Block from '../../components/Block';
import './messenger.scss';
import ChatsController from '../../controllers/ChatsController';
import { connect } from '../../store/index';
import { Router, withRouter } from '../../router/Router';
import avatarPlaceholder from '../../../assets/profile_placeholder.png';

class Messenger extends Block {
  protected getStateFromProps() {
    this.state = {
      chats: [],
      sendMessage: () => {
        const message = (this.refs.messageText as HTMLInputElement).value.trim();
        if (message) {
          ChatsController.sendMessage(message);
          (this.refs.messageText as HTMLInputElement).value = '';
        }
      },
      isOwnMessage: (data: any) => {
        const id = data.user_id ? data.user_id : data.userId;
        return id === this.props.user.profile.id ? 'own' : '';
      },
      openNewChatModal: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#new_chat_modal');
        modal?.showModal();
      },
      closeNewChatModal: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#new_chat_modal');
        modal?.close();
      },
      createChat: () => {
        const title = (this.refs.title as HTMLInputElement).value;
        ChatsController.createChat(title).then(() => {
          this.fetchChats();
        });
      },
      imageUrl: (endpoint: string) => {
        return endpoint ? `https://ya-praktikum.tech/api/v2/resources/${endpoint}` : avatarPlaceholder;
      },
      openAddUserModal: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#add_user_modal');
        modal?.showModal();
      },
      closeAddUserModal: () => {
        const modal: HTMLDialogElement | null = document.querySelector('#add_user_modal');
        modal?.close();
      },
      addUser: () => {
        const userId = Number((this.refs.userId as HTMLInputElement).value);
        ChatsController.addUserToChat(userId, this.props.chat.chatData.id);
      },
      messageAuthor: (messageData: any) => {
        const user = this.props.chat.chatUsers.find((user: any) => user.id === messageData.user_id);
        return user?.display_name ? user?.display_name : user?.first_name;
      },
      goToProfile: () => {
        Router.go('/profile');
      }
    };
  }

  render() {
    return template;
  }

  fetchChats() {
    ChatsController.fetchChats().then(chats => {
      this.state.chats = chats;
    });
  }

  componentDidMount() {
    if (!this.props.user) {
      Router.go('/');
      return;
    }
    this.fetchChats();
  }
}

const page = connect((state: any) => ({user: state.user || {}, chat: state.chat || {}}), Messenger);

export default withRouter(page);
