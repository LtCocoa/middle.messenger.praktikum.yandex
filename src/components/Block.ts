import EventBus from '../utils/EventBus';
import { v4 } from 'uuid';
import Handlebars from 'handlebars';

interface BlockMeta<P = any> {
  props: P;
}

export default class Block<P = any> {
  static EVENTS: {
    [key: string]: string;
  } = {
    INIT: 'init',
    COMPONENT_DID_UPDATE: 'component-did-update',
    COMPONENT_DID_MOUNT: 'component-did-mount',
    RENDER: 'render',
  }

  _element: HTMLElement | null;
  _id: string;

  private readonly _meta: BlockMeta;

  protected children: {[id: string]: Block} = {};
  protected state: any = {};
  protected refs: {[key: string]: HTMLElement} = {};

  protected readonly props: P;
  eventBus: EventBus;

  public constructor(props?: P) {
    this.eventBus = new EventBus();
    
    this._meta = {
      props
    };

    this.getStateFromProps(props);

    this.props = this._makeProxyProps(props || {} as P);
    
    this._id = v4();
    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.COMPONENT_DID_UPDATE, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.COMPONENT_DID_MOUNT, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.RENDER, this._render.bind(this));
  }

  protected getStateFromProps(props: any): void {
    this.state = {};
  }

  _render() {
    const fragment = this._compile();
    
    this._removeEvents();
    const newElement = fragment.firstChild!;

    this._element!.replaceWith(newElement);

    this._element = newElement as HTMLElement;
    this._addEvents();
  }

  _makeProxyProps(props: any): any {
    return new Proxy(props, {
      set: (target: Record<string, any>, prop: string, value: any) => {
        target[prop] = value;
        this.eventBus.emit(Block.EVENTS.COMPONENT_DID_UPDATE);
        return true;
      },
      get: (target: Record<string, any>, prop: string) => {
        return target[prop];
      },
      deleteProperty: () => {
        throw new Error('Нет доступа');
      }
    });
  }

  _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.addEventListener(event, listener);
    });
  }

  _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element!.removeEventListener(event, listener);
    });
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  _componentDidUpdate(oldProps: P, newProps: P) {
    const didUpate = this.componentDidUpdate(oldProps, newProps);
    if (didUpate) {
      this._render();
    }
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.RENDER);
  }

  _createResources() {
    this._element = this._createDocumentElement('div');
  }

  _compile(): DocumentFragment {
    const fragment = document.createElement('template');

    /**
     * Рендерим шаблон
     */
    const template = Handlebars.compile(this.render());
    fragment.innerHTML = template({
      ...this.state,
      ...this.props,
      children: this.children,
      refs: this.refs,
      id: this._id
    });

    /**
     * Заменяем заглушки на компоненты
     */
    Object.entries(this.children).forEach(([id, component]) => {
      /**
       * Ищем заглушку по id
       */
      const stub = fragment.content.querySelector(`[uuid="${id}"]`);

      if (!stub) {
        return;
      }

      /**
       * Заменяем заглушку на component._element
       */
      stub.replaceWith(component.getContent());
    });

    /**
     * Возвращаем фрагмент
     */
    return fragment.content;
  }

  get element() {
    return this._element;
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.COMPONENT_DID_MOUNT);
  }

  getContent(): HTMLElement {
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (this.element?.parentNode?.nodeType !==  Node.DOCUMENT_FRAGMENT_NODE ) {
          this.eventBus.emit(Block.EVENTS.COMPONENT_DID_MOUNT);
        }
      }, 100);
    }

    return this.element!;
  }

  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  getHTML(): string {
    return (this.getContent() as HTMLElement).innerHTML;
  }

  protected render(): string {
    return '';
  }

  componentDidUpdate(oldProps: P, newProps: P): boolean {
    return true;
  }

  componentDidMount() {}

  setProps = (nextProps: object): void => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
  
}

