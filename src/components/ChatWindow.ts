import { compile } from '../templator/Templator';
import Block from './Block';

class Button extends Block {
  constructor(props) {
    super('button', props);
  }

  render() {
    const template = `<div>${this.props.text}</div>`;
    return compile(template, this.props);
  }
}

const template = `<div>{{ button }}</div>`;

export default class ChatWindow extends Block {
  constructor() {
    super('div', {
      name: window,
      button: new Button({
        text: 'Click me',
      })
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setProps({
        button: {
          text: "Login 3",
        }
      });
    }, 5000);
  }

  render() {
    return compile(template, {
      button: this.props.button.render()
    });
  }
} 
}