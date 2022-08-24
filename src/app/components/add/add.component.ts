import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  tempId: string | null = ''

  constructor(private wordService: WordService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchWord()
  }

  onSubmit() {
    console.log(this.tempId)
    if (this.tempId) {
      this.wordService.putWord(this.vocabularyForm.getRawValue(), this.tempId).subscribe(res => res)
    } else {
      this.wordService.postWord(this.vocabularyForm.getRawValue()).subscribe(res => res)
    }
    this.router.navigate(['/'])
  }

  fetchWord() {
    this.tempId = this.route.snapshot.paramMap.get('id')
    if (this.tempId) {
      this.wordService.getWord(this.tempId).subscribe((res: any) => {
        this.vocabularyForm.setValue({
          title: res.title,
          translate: res.translate
        })
      })
    }
  }


}
