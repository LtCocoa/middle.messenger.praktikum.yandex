import { queryString, PlainObject } from './utils';

enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
};

function queryStringify(data: object): string {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}

type RequestOptions = {
  headers?: object;
  method?: METHODS;
  data?: any;
  timeout?: number;
}

export class HTTPTransport {
  baseUrl: string = 'https://ya-praktikum.tech';
  url: string = '';

  constructor(url: string) {
    this.url = url;
  }

  get = (url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<XMLHttpRequest> => {       
    let queryUrl = this.concatUrl(url);
    return this.request(queryUrl, data, {...options, method: METHODS.GET}, 5000);
  };

  post = (url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.POST}, 5000);
  };

  put = (url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.PUT}, 5000);
  };

  delete = (url: string, data: PlainObject = {}, options: RequestOptions = {}): Promise<XMLHttpRequest> => { 
    return this.request(this.concatUrl(url), data, {...options, method: METHODS.DELETE}, 5000);
  };

  concatUrl = (url: string) => {
    return `${this.baseUrl}/${this.url}/${url}`;
  }

  request = (
    url: string,
    data: object = {},
    options: RequestOptions = {},
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      accept: 'application/json'
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

      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
    
      xhr.onload = function() {
        if (xhr.status !== 200) {
          reject(JSON.parse(xhr.response));
        } else {
          resolve(xhr);
        }
      };
  
      xhr.onabort = reject;
      xhr.onerror = reject;
  
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
          
      if (options.method === METHODS.GET) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
