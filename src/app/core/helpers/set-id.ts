export function setID(url?: string): number {
  if (!url) return -1;
  let arr = url.split('/');
  let id = arr[arr.length - 2];
  return +id;
}
