import Block from '../components/Block';
import { Route } from './Route';

export class Router {
  static __instance: Router;
  routes: Route[];
  history: History;
  _currentRoute: Route | null;
  _rootQuery: string;
  _history: History;

  constructor(rootQuery: string) {
      if (Router.__instance) {
        return Router.__instance;
      }

      this.routes = [];
      this._history = window.history;
      this._currentRoute = null;
      this._rootQuery = rootQuery;

      Router.__instance = this;
  }

  use(pathname: string, block: typeof Block): Router {
    const route = new Route(pathname, block, {rootQuery: this._rootQuery});
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = (event: Event) => {
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
    this._history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back(): void {
    this._history.back();
  }

  forward(): void {
    this._history.forward();
  }

  getRoute(pathname: string): Route | null{
    return this.routes.find(route => route.match(pathname)) as Route;
  }
}
