export function ConvertObjectToArray<T extends Object>(obj: T) {
  return Object.keys(obj).map((key) => {
    return `${key}=${obj[key as keyof T]}`;
  });
}

export function ConvertArrayToString(array: string[], separator: string) {
  return array.join(separator);
}

export function ConvertObjToString<T extends Object>(obj: T) {
  const arr = ConvertObjectToArray<T>(obj);

  return ConvertArrayToString(arr, "&");
}
