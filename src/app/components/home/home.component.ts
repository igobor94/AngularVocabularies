import { Component, OnInit } from '@angular/core';
import { WordService } from 'src/app/services/word.service';
import { Word } from '../../interfaces/word'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words: Word[] = [];

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((res: any) => {this.words = [...this.words, ...res]; console.log(this.words)});
  }

}
