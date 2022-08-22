import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Word } from 'src/app/interfaces/word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  vocabularyForm = new FormGroup({
      title: new FormControl(''),
      translate: new FormControl('')
  })

  constructor(private wordService: WordService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.vocabularyForm.getRawValue())
    this.wordService.postWord(this.vocabularyForm.getRawValue()).subscribe(res => res)
    this.router.navigate(['/'])
  }

}
