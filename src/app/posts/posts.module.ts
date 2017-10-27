import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './posts.component';
import { PostsListComponent } from './posts-list/posts-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
    // FormsModule
  ],
  declarations: [
    PostsComponent,
    PostsListComponent
  ]
})
export class PostsModule { }
