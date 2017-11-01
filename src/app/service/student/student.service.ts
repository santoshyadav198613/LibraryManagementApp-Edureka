import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StudentService {
  studentList: Array<Student> = new Array<Student>();
  constructor(public http: HttpClient) {

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

  addStudent(student: Student) {
    this.studentList.push(student);
  }

  getStudendsDB() {
    return this.http.get<Student[]>('http://localhost:3000');
  }

  addStudenToDB(student: Student) {
    return this.http.post('http://localhost:3000', student);
  }
}
