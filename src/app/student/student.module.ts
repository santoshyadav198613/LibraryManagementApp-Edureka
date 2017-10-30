import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule } from '@angular/router';
import { StudentService } from '../service/student/student.service';
import { NewstudentService } from '../service/student/newstudent.service';

import { AuthGuard } from '../service/authguard/auth.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'student', component: StudentComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    StudentComponent,
    StudentListComponent
  ],
  providers: [{ provide: StudentService, useClass: NewstudentService }]
})
export class StudentModule { }
