import Block from '../components/Block';

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);
  
  if (root) {
    root.innerHTML = '';
    root.appendChild(block.getContent());
  }
  return root;
}

export class Route {
  _pathname: string;
  _blockClass: typeof Block;
  _block: Block | null;
  _props: any;

  constructor(pathname: string, view: typeof Block, props: object) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {}

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = new this._blockClass();
    }
    render(this._props.rootQuery, this._block);
  }
}
