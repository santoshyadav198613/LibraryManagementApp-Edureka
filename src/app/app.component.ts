import { Component, } from '@angular/core';
import { StudentService } from './service/student/student.service';
import { Student } from './service/student/student';

@Component({
  selector: 'app-comp',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome to My Application
  // </h1>`,
  styleUrls: ['./app.component.css'],
  //styles: []
})
export class AppComponent {
  title = 'app';

  constructor(private studentService: StudentService) {

  }

  addStudent() {
    let student: Student = {
      id: 5, firstName: 'Ronaldo', lastName: 'test', address: 'madrid',
      age: 31, course: 'sports', dob: new Date('31-oct-1980') 
    };

    this.studentService.addStudent(student);
  }

}
