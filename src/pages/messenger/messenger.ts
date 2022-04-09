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
        }
      }
    };
  }

  render() {
    return template;
  }

  componentDidUpdate() {
    if (this.props.chat) {
      
    }

    return true;
  }

  async componentDidMount() {
    this.state.chats = await ChatsController.fetchChats();
  }
}

const page = connect((state: any) => ({user: state.user || {}, chat: state.chat || {}}), Messenger);

export default withRouter(page);
