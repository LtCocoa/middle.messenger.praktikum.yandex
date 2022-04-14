import Block from '../components/Block';
import { Route } from './Route';

export class Router {
  static __instance: Router;
  routes: Route[] = [];
  history: History = window.history;
  _currentRoute: Route | null = null;

  constructor() {
      if (Router.__instance) {
        return Router.__instance;
      }

      Router.__instance = this;
  }

  use(pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, {rootQuery: '#root'});
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route) return;

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string): void {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  static go(pathhame: string): void {
    this.__instance.go(pathhame);
  }

  back(): void {
    this.history.back();
  }

  forward(): void {
    this.history.forward();
  }

  getRoute(pathname: string): Route | null{
    return this.routes.find(route => route.match(pathname)) as Route;
  }
}

export function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    constructor(props: any) {
      const router = new Router();

      super({...props, router: router});
    }
  };
}
