export default class EventBus {
  listeners: {
    [key: string]: Function[];
  };

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      throw new Error(`Не существует события ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
    if (!this.listeners[event].length) {
      delete this.listeners[event];
    }
  }

  emit(event: string, ...args: any[]): void {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach(listener => listener(...args));
  }
}
