import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StudentService } from '../../service/student/student.service';
import { Student } from '../../service/student/student';
import { StudentEditComponent } from '../student-edit/student-edit.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // studentService = new StudentService();
  students: Array<Student>;
  constructor(private studService: StudentService,
    private matDialog: MatDialog) { }

  ngOnInit() {
    this.studService.getStudendsDB().subscribe((data) => this.students = data);
    //console.log(this.studService.studentList);
  }

  editStudent(student: Student): void {
    let dialogRef = this.matDialog.open(StudentEditComponent, {
      data: student
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

}
