export interface Pagination<T> {
  count: number;
  results: T[];
  next: string;
  previous: string;
}
