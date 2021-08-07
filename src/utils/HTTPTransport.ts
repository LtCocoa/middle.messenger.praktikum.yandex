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
  headers?: object,
  method?: METHODS,
  data?: any,
  timeout?: number
}

export class HTTPTransport {
  get = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => {       
    let queryUrl = options.data ? `${url}${queryStringify(options.data)}` : url;
    return this.request(queryUrl, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete = (url: string, options: RequestOptions = {}): Promise<XMLHttpRequest> => { 
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (
    url: string,
    options: RequestOptions = {},
    timeout = 5000
  ): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data } = options;

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

      Object.keys(headers).forEach(key => {
              xhr.setRequestHeader(key, headers[key]);
      });
    
      xhr.onload = function() {
        resolve(xhr);
      };
  
      xhr.onabort = reject;
      xhr.onerror = reject;
  
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
          
      if (options.method === METHODS.GET) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
