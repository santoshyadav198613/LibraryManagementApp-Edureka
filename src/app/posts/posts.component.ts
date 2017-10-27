import { Component, OnInit } from '@angular/core';
import { PostsService } from '../service/posts/posts.service';

import { Posts } from '../service/posts/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  posts: Posts = new Posts();
  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  addPosts() {
    this.postsService.addPost(this.posts).subscribe((data) => console.log(data));
  }

}
