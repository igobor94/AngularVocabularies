import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  server: string = 'http://localhost:3000/vocabulary'

  constructor(private http: HttpClient) { }

  getWords() {
    return this.http.get(this.server)
  }
  postWord(body: Word | object) {
    const header: Object = { 'content-type': 'application/json'} 
    return this.http.post(this.server, body, header)
  }
  putWord(body: Word | object) {
    
  }
}
