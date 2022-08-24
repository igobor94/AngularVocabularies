import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Word } from '../interfaces/word';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  server: string = 'http://localhost:3000/vocabulary'
  header: Object = { 'content-type': 'application/json'}

  constructor(private http: HttpClient) { }

  getWords() {
    return this.http.get(this.server)
  }
  postWord(body: Word | object) { 
    return this.http.post(this.server, body, this.header)
  }
  putWord(body: Word | Object) {
    return this.http.put(this.server, body, this.header)
  }
}
