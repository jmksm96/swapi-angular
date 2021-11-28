import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient) {}
  private _img!: File;

  public get img(): File {
    return this._img;
  }
  public set img(value: File) {
    this._img = value;
  }

  getImg(id: number, category: string): Observable<Blob> {
    return this.http.get(
      `https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`,
      { responseType: 'blob' }
    );
  }

  getPlaceholder() {
    return this.http.get(
      `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`,
      { responseType: 'blob' }
    );
  }
}
