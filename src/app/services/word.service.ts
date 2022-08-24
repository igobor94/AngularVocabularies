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
  getWord(id: string) {
    return this.http.get(this.server + `/${id}`)
  }
  postWord(body: Word | object) { 
    return this.http.post(this.server, body, this.header)
  }
  putWord(body: Word | Object, id: string | null) {
    return this.http.put(this.server + `/${id}`, body, this.header)
  }
}
