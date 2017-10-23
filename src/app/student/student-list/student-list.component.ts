import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../service/student/student.service';
import { Student } from '../../service/student/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // studentService = new StudentService();
  students: Array<Student>;
  constructor(private studService: StudentService) { }

  ngOnInit() {
    this.students = this.studService.getStudents();
  }

}
