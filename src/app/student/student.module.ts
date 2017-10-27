import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';

import { StudentService } from '../service/student/student.service';
import { NewstudentService } from '../service/student/newstudent.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  providers: [{ provide: StudentService, useClass: NewstudentService }]
})
export class StudentModule { }
