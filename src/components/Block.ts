import EventBus from '../utils/EventBus';
import { v4 } from 'uuid';

export default class Block {
  static EVENTS: {
    [key: string]: string
  } = {
    INIT: 'init',
    COMPONENT_DID_UPDATE: 'component-did-update',
    COMPONENT_DID_MOUNT: 'component-did-mount',
    RENDER: 'render',
  }

  _element: Node | null = null;
  _id: string;

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
    
    this._id = v4();
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
      this._addEvents();
    }
  }

  _makeProxyProps(props: object): object {
    return new Proxy(props, {
      set: (target: Record<string, any>, prop: string, value: any) => {
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.COMPONENT_DID_UPDATE);
        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      }
    });
  }

  _addEvents() {
    const {events = {}} = this.props;

    Object.keys(events).forEach(eventName => {
      window.addEventListener(eventName, (event) => {
        const uuid = (event.target as HTMLElement).getAttribute('uuid');
        if (uuid === this._id) {
          event.stopPropagation();
          const handler = events[eventName].bind(this);
          handler();
        }
      });
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  _componentDidUpdate(oldProps: object, newProps: object) {
    const didUpate = this.componentDidUpdate(oldProps, newProps);
    if (didUpate) {
      this.eventBus().emit(Block.EVENTS.RENDER);
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

  getHTML(): string {
    return (this.getContent() as HTMLElement).outerHTML;
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