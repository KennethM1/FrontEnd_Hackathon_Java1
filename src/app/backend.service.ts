import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private urlCharacters: string;
  private urlAddChar: string;
  private urlCharByID: string;
  private urlCharEdit: string;

  constructor(private http: HttpClient) {
    this.urlCharacters = 'http://localhost:5000/character/all'; //get all characters
    this.urlAddChar = 'http://localhost:5000/character/new'; //add new character
    this.urlCharByID = 'http://localhost:5000/character'; //get character by ID
    this.urlCharEdit = 'http://localhost:5000/character/edit'; //edit character
  }

  public getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlCharacters);
  }

  public addCharacter(): Observable<Character> {
    return this.http.get<Character>(this.urlAddChar);
  }

  public getCharacterByID(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.urlCharByID}/${id}`);
  }
  public editCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.urlCharacters, character);
  }
}
