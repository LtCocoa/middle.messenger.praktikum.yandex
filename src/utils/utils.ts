export function get(obj: object, path: string, defaultValue?: any) {
  const keys: string[] = path.split('.');

  let result: object = obj;
  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }

  return result ?? defaultValue;
}
