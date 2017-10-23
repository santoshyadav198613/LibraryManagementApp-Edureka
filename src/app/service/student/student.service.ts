import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable()
export class StudentService {
  studentList: Array<Student> = new Array<Student>();;
  constructor() {

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
      },
      {
        id: 4, firstName: 'Suresh', lastName: 'Kumar', course: 'Markeeting',
        address: 'Mumbai', age: 34, dob: new Date('10-Oct-1970')
      },
    ];
  }

  addStudent() {

  }
}
