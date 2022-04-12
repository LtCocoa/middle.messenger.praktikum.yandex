import template from './messenger.tmpl';
import Block from '../../components/Block';
import './messenger.scss';
import ChatsController from '../../controllers/ChatsController';
import { connect } from '../../store/index';
import { withRouter } from '../../router/Router';

class Messenger extends Block {
  protected getStateFromProps() {
    this.state = {
      chats: [],
      sendMessage: () => {
        const message = this.refs.messageText.value.trim();
        if (message) {
          ChatsController.sendMessage(message);
          this.refs.messageText.value = '';
        }
      },
      isOwnMessage: (data: any) => {
        console.log(data);
        const id = data.user_id ? data.user_id : data.userId;
        return id === this.props.user.profile.id ? 'own' : '';
      }
    };
  }

  render() {
    return template;
  }

  async componentDidMount() {
    this.state.chats = await ChatsController.fetchChats();
  }
}

const page = connect((state: any) => ({user: state.user || {}, chat: state.chat || {}}), Messenger);

export default withRouter(page);
