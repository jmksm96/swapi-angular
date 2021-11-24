import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pagination } from '../models/pagination';
import { setID } from './set-id';

export function mapResponse<T>(ctor: new (data: any) => T) {
  return (source$: Observable<any>): Observable<T> =>
    source$.pipe(map((res) => new ctor(res)));
}

export function mapPaginatedResponse<T>(ctor: new (data: any) => T) {
  return (source$: Observable<Pagination<any>>): Observable<Pagination<T>> =>
    source$.pipe(
      map((res) => ({
        ...res,
        results:
          res.results &&
          res.results.map((item) => new ctor({ ...item, id: setID(item.url) })),
      }))
    );
}
