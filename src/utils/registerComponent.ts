import Block from '../components/Block';
import Handlebars, { HelperOptions } from 'handlebars';

interface BlockConstructable<Props = any> {
  new(props: Props): Block;
}

export default function registerComponent<Props = any>(Component: BlockConstructable) {
  Handlebars.registerHelper(Component.name, function ({
    hash: { ref, ...hash },
    data
  }: HelperOptions) {
    if (!data.root.children) {
      data.root.children = {};
    }

    if (!data.root.refs) {
      data.root.refs = {};
    }

    const { children, refs } = data.root;

    const component = new Component(hash);

    children[component._id] = component;

    if (ref) {
      refs[ref] = component.getContent();
    }

    return `<div uuid="${component._id}"></div>`;
  });
}