import Block from './components/Block';

interface TestProps {
  header: String
}

export class Test extends Block {
  protected getStateFromProps() {
    this.state = {
      text: 'Q',
      testClick: () => {
        console.log('test');
      }
    };
  }

  componentDidMount() {
    setTimeout(() => {      
      this.props.text = 'Hello';
    }, 2000);
  }

  testClick = () => {
    console.log('test');
  }

  render() {
    return `<div class="form">
      <h1>{{ text }}</h1>
      {{{ Input type="text" }}}
      {{{ Button text="OK" class="form-controls__button primary" onClick=testClick }}}
    </div>`;
  }
}

export class TestInput extends Block {
  render() {
    return `<input type="text"">`;
  }
}
