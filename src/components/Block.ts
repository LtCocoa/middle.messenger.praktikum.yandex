import EventBus from '../utils/EventBus';

export default class Block {
  static EVENTS: {
    [key: string]: string
  } = {
    INIT: 'init',
    COMPONENT_DID_UPDATE: 'component-did-update',
    COMPONENT_DID_MOUNT: 'component-did-mount',
    RENDER: 'render',
  }

  _element: HTMLElement | null = null;

  _meta: {
    tagName: string,
    props: object
  } | null = null;

  props: object;
  eventBus: Function;

  constructor(tagName: string = 'div', props: object = {}) {
    const eventBus = new EventBus();
    this.eventBus = () => eventBus;
    
    this._meta = {
      tagName,
      props
    }

    this.props = this._makeProxyProps(props);

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.COMPONENT_DID_UPDATE, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.COMPONENT_DID_MOUNT, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.RENDER, this._render.bind(this));
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    if (this._element) {
      this._element.innerHTML = block;
    }
  }

  _makeProxyProps(props: object): object {
    return new Proxy(props, {
      set: (target: Record<string, any>, prop: string, value: any) => {
        target[prop] = value;
        // emit here
        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      }
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  _componentDidUpdate(oldProps: object, newProps: object) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this._render();
    }
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.RENDER);
  }

  _createResources() {
    if (!this._meta) {
      throw new Error('No meta provided');
    };
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  get element() {
    return this._element;
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.COMPONENT_DID_MOUNT);
  }

  getContent() {
    return this.element;
  }

  render(): any {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(oldProps: object, newProps: object): boolean {
    return true;
  }

  componentDidMount() {}

  setProps = (nextProps: object): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };
}