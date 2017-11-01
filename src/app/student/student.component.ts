import { Component, OnInit } from '@angular/core';
import { Student } from '../service/student/student';
import { StudentService } from '../service/student/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  //providers : []
})
export class StudentComponent implements OnInit {
  student: Student = new Student();
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  addStudent(customerForm: any) {
    console.log(customerForm);
    this.studentService.addStudenToDB(this.student).subscribe(
      (data) => console.log(data)
    );
    this.studentService.addStudent(this.student);
    this.student = new Student();
    //console.log(this.student);
  }

}
