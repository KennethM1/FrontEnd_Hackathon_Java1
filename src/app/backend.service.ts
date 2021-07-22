import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private urlCharacters: string;
  constructor(private http: HttpClient) {
    this.urlCharacters = 'http://localhost:0000/xxxxxx/';
  }

  public getCharcters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.urlCharacters);
  }
}
