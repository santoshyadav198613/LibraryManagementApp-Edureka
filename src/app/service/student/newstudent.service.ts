import { Injectable } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student'
import { HttpClient } from '@angular/common/http';
@Injectable()
export class NewstudentService extends StudentService {

  constructor(public http: HttpClient) {
    super(http);
  }

  getStudents(): Array<Student> {
    return this.studentList = [
      {
        id: 1, firstName: 'Rajesh', lastName: 'Kumar', course: 'Markeeting',
        address: 'Mumbai', age: 34, dob: new Date('10-Oct-1970')
      },
      {
        id: 2, firstName: 'Ramesh', lastName: 'Kumar', course: 'Markeeting',
        address: 'Mumbai', age: 34, dob: new Date('10-Oct-1970')
      },
      {
        id: 3, firstName: 'Sachin', lastName: 'Kumar', course: 'Markeeting',
        address: 'Mumbai', age: 34, dob: new Date('10-Oct-1970')
      }
    ];
  }


}
