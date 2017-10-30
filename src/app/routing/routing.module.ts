import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EmployeeComponent } from '../employee/employee.component';
import { BooksComponent } from '../books/books.component';
import { PostsComponent } from '../posts/posts.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component'
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from '../login/login.component';

import { AuthGuard } from '../service/authguard/auth.guard';
import { PostsResolveGuard } from '../service/posts/posts-resolve.guard';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
      { path: 'employeee', component: EmployeeComponent, canActivate: [AuthGuard] },
      { path: 'student', loadChildren: '../student/student.module#StudentModule' },
      {
        path: 'posts', component: PostsComponent, canActivate: [AuthGuard],
        resolve: {
          postsList: PostsResolveGuard
        }
      },
      // { path: 'student', component: StudentComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  // exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
