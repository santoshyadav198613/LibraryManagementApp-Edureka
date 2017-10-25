import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { passwordValidator } from '../customvalidator/password.validator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.booksForm = this.fb.group({
      subject: new FormControl('', [Validators.required, passwordValidator]),
      date: new FormControl('', [Validators.required]),
      staff: this.fb.group({
        name: new FormControl('', [Validators.email]),
        id: new FormControl('', [Validators.required]),
        designation: new FormControl('', [Validators.required])
      }),
      books: this.fb.array([
        this.buildForm()
      ])
    })
  }

  buildForm() {
    return this.fb.group({
      name: new FormControl('', [Validators.required]),
      publisher: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required])
    });
  }


  addBook() {
    const booksControl = this.booksForm.controls['books'] as FormArray;
    booksControl.push(this.buildForm());
  }

  removeBook(i: number) {
    const booksControl = this.booksForm.controls['books'] as FormArray;
    booksControl.removeAt(i);
  }

}
