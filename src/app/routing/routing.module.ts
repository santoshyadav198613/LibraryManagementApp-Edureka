import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
import { BooksComponent } from '../books/books.component';
import { PostsComponent } from '../posts/posts.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component'
import { StudentComponent } from '../student/student.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent },
      { path: 'employeee', component: EmployeeComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'student', component: StudentComponent },
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  // exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
