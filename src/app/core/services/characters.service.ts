import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CharacterResponse } from '../models/character';
import { CharactersPaginatedResponse } from '../models/characters';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get<Pagination<CharactersPaginatedResponse>>(
      environment.backendUrl + '/people'
    );
  }

  getCharacter(id: string) {
    return this.http.get<CharacterResponse>(
      environment.backendUrl + `/people/${id}`
    );
  }
}
