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
      openChat: () => {
        console.log('!');
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

export default withRouter(connect((state: any) => ({user: state.user || {}}), Messenger));
