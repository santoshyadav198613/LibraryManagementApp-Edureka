import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';
import { StudentModule } from './student/student.module';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
// import { StudentComponent } from './student/student.component';
// import { StudentListComponent } from './student/student-list/student-list.component';

// import { StudentService } from './service/student/student.service';
import { NewstudentService } from './service/student/newstudent.service';
import { BooksComponent } from './books/books.component';
// import { PostsComponent } from './posts/posts.component';
// import { PostsListComponent } from './posts/posts-list/posts-list.component';

import { HttpinterceptorService } from './interceptor/httpinterceptor.service';
import { NewinterceptorService } from './interceptor/newinterceptor.service';

import { API_CONFIG, APP_CONFIG } from './service/valueProvider/value.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component'

import { LoginService } from './service/login/login.service';
import { AuthGuard } from './service/authguard/auth.guard';
import { PostsResolveGuard } from './service/posts/posts-resolve.guard';
import { PostsService } from './service/posts/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    BooksComponent,
    // PostsComponent,
    // PostsListComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    // HttpClientModule,
    // StudentModule,
    PostsModule,
    SharedModule,
    RoutingModule
  ],
  // providers: [StudentService],
  providers: [
    //{ provide: StudentService, useClass: NewstudentService },
    { provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NewinterceptorService, multi: true },
    { provide: API_CONFIG, useValue: APP_CONFIG },
    LoginService, AuthGuard, PostsResolveGuard ,PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
