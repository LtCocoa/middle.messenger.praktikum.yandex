import { get } from './Utils';
import Block from '../components/Block';

export const compile = (template: string, ctx: object): Node | null => {
  const TEMPLATE_REGEXP: RegExp = /\{\{(.*?)\}\}/gi;

  let tmpl: string = template;
  let key: RegExpExecArray | null = null;
  const regExp: RegExp = TEMPLATE_REGEXP;
  const comps = new Map();

  while (key = regExp.exec(tmpl)) {
    if (key[1]) {
      const tmplValue: string = key[1].trim();
      const data = get(ctx, tmplValue);
      if (data instanceof Block) {
        comps.set(key[0], data);

        continue;
      }

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

  const wrapper = document.createElement('div');
  wrapper.innerHTML = tmpl;

  if (comps.size) {
    const divs = Array.from(wrapper.querySelectorAll('div'));
    const compNames = [...comps.keys()];

    divs.forEach(div => {
      compNames.forEach(name => {

        const textContent = div.textContent?.trim();
        const a = textContent?.match(name);
        console.log(a);

        if (a && comps.has(a[0])) {
          const s = textContent?.indexOf(a[0]);
          div.textContent = '';
          div.append(textContent?.substring(0, s));
          div.appendChild(comps.get(a[0]).getContent());
          div.append(textContent?.substring(a[0].length));
        }
      });
    });
  }

  return wrapper.childNodes[1];
}