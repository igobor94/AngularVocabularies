import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word.service';
import { Word } from '../../interfaces/word';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  filter: boolean = false;
  words: Word[] = [];
  filteredWords: Word[] = [];

  constructor(private wordService: WordService) {}

  ngOnInit(): void {
    this.getVocabulary();
  }

  getVocabulary() {
    this.wordService.getWords().subscribe((res: any) => {
      (this.words = []), (this.words = [...this.words, ...res]);
      console.log(res);
    });
  }

  onDelete(id: string) {
    this.wordService
      .deleteWord(id)
      .subscribe((res: any) => this.getVocabulary());
  }

  filterByLetters(name: string) {
    this.filter = !this.filter
    if(name === 'word') {
      this.words.sort((a, b) => {
        if (this.filter === false) {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    } else {
      this.words.sort((a, b) => {
        if (this.filter === false) {
          return a.translate.localeCompare(b.translate);
        } else {
          return b.translate.localeCompare(a.translate);
        }
      });
    }

    console.log(this.words, this.filter);
  }
}
