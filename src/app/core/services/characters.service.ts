import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Character, CharacterResponse } from '../models/character';
import { CharactersPaginatedResponse } from '../models/characters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http
      .get<CharactersPaginatedResponse>(environment.backendUrl + '/people')
      .pipe(map((res) => res.results.map((i) => new Character(i))));
  }

  getCharacter(id: number) {
    return this.http.get<CharacterResponse>(
      environment.backendUrl + `/people/${id}`
    );
  }
}
