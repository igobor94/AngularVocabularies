import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WordService } from 'src/app/services/word.service';
import { Word } from '../../interfaces/word'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  words: Word[] = [];

  constructor(private wordService: WordService, private elRef: ElementRef, private router: Router) { }

  ngOnInit(): void {
    this.wordService.getWords().subscribe((res: any) => {this.words = [...this.words, ...res]; console.log(this.words)});
  }



  onEdit(event: MouseEvent, id: string) {
    this.router
  }

}
