export type Events = {
  [key: string]: Function;
};

export type ComponentProps = {
  events?: Events;
  cssClass?: string;
};