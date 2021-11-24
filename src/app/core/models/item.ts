export abstract class Item<T> {
  isLoading?: boolean;

  constructor(data: T) {
    Object.assign(this, data);
  }

  update(data: T) {
    Object.assign(this, data);
  }
}
