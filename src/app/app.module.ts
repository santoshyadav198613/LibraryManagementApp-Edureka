import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student/student-list/student-list.component';

import { StudentService } from './service/student/student.service';
import { NewstudentService } from './service/student/newstudent.service';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    StudentComponent,
    StudentListComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers: [StudentService],
  providers: [{ provide: StudentService, useClass: NewstudentService }] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
