import { get } from '../utils/utils';

export default class Templator {
  _template: string;
  TEMPLATE_REGEXP: RegExp = /\{\{(.*?)\}\}/gi;

  constructor(template: string) {
    this._template = template;
  }

  compile(ctx: object): string {
    return this._compileTemplate(ctx);
  }

  _compileTemplate(ctx: object): string {
    let tmpl: string = this._template;
    let key: RegExpExecArray = null;
    const regExp: RegExp = this.TEMPLATE_REGEXP;

    while ((key = regExp.exec(tmpl))) {
      if (key[1]) {
        const tmplValue: string = key[1].trim();
        const data = get(ctx, tmplValue);

        if (typeof data === 'function') {
          window[tmplValue] = data;
          tmpl = tmpl.replace(
            new RegExp(key[0], 'gi'),
            `window.${key[1].trim()}()`
          );
          continue;
        }

        tmpl = tmpl.replace(new RegExp(key[0], 'gi'), data);
      }
    }

    return tmpl;
  }
}