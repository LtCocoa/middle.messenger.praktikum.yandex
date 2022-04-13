import {assert} from 'chai';
import Block from './Block';
import { ComponentProps } from './Types';

interface TestComponentProps extends ComponentProps {
  text: string;
}

class TestComponent extends Block {
  constructor({cssClass, elementId, text}: TestComponentProps) {
    super({cssClass, elementId, text});
  }

  render(): string {
    return '<div class="{{cssClass}}" id="{{elementId}}">{{text}}</div>';
  }
}

const component = new TestComponent({
  cssClass: 'test-class',
  text: 'test',
  elementId: 'test-id'
});

describe('Block', () => {
  it('render возвращает правильное содержимое', () => {
    assert.equal(component.getContent().innerHTML, '<div>test</div>');
  });

  it('устанавливает правильный класс', () => {
    assert.equal(component.getContent().getAttribute('class'), 'test-class');
  });

  it('устанавливает правильный id', () => {
    assert.equal(component.getContent().getAttribute('id'), 'test-id');
  });
});