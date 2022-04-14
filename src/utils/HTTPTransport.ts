import { PlainObject } from './utils';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
};

type RequestOptions = {
  headers?: object;
  method?: METHODS;
  data?: any;
  timeout?: number;
}

export class HTTPTransport {
  baseUrl: string = 'https://ya-praktikum.tech/api/v2';
  url: string = '';

  constructor(url: string) {
    this.url = url;
  }

  public get<Response>(url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<Response> {
    let queryUrl = this.concatUrl(url);
    return this.request<Response>(queryUrl, data, {...options, method: METHODS.GET}, 5000);
  };

  public post<Response>(url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<Response> {
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.POST}, 5000);
  };

  public put<Response>(url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<Response> {
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.PUT}, 5000);
  };

  public delete<Response>(url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<Response> { 
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.DELETE}, 5000);
  };

  public putFile<Response>(url: string, data: FormData, options: RequestOptions = {
    headers: {
      'content-type': 'multipart/form-data',
    }
  }): Promise<Response> {
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.PUT}, 5000);
  };

  concatUrl = (url: string) => {
    return `${this.baseUrl}/${this.url}/${url}`;
  }

  private request<Response> (
    url: string,
    data: object = {},
    options: RequestOptions = {},
    timeout = 5000
  ): Promise<Response> {
    const { headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'accept': 'application/json'
    }, method } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();

      xhr.open(
        method,
        url
      );

      xhr.withCredentials = true;

      if ((headers as any)['content-type'] !== 'multipart/form-data') {
        xhr.setRequestHeader('content-type', (headers as any)['content-type']);
      }
      xhr.setRequestHeader('accept', (headers as any)['accept']);
      
      xhr.responseType = 'json';
    
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };
  
      xhr.onabort = reject;
      xhr.onerror = reject;
  
      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (options.method === METHODS.GET) {
        xhr.send();
      } else if ((headers as any)['content-type'] === 'multipart/form-data') {
        xhr.send(data as FormData);
      }
      else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
