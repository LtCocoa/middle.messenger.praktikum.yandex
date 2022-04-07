import { HTTPTransport } from '../utils/HTTPTransport';

export default class BaseAPI {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(endpoint);
  }

  public create(data: unknown): Promise<unknown> { return Promise.reject('not implemented'); };

  public request(identifier?: string): Promise<unknown> { return Promise.reject('not implemented'); };

  public update(identifier: string, data: unknown): Promise<unknown> { return Promise.reject('not implemented'); };

  public delete(identifier: string): Promise<unknown> { return Promise.reject('not implemented'); };
}