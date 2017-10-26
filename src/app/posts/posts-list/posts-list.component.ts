import { Component, OnInit } from '@angular/core';
import { HttpEventType,HttpResponse } from '@angular/common/http';
import { PostsService } from '../../service/posts/posts.service';
import { Posts } from '../../service/posts/posts';
@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Posts[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPostsData().subscribe((event) => {
      if (event.type === HttpEventType.DownloadProgress) {
        console.log(event.total);
        console.log(event.loaded);
      }
      else if (event instanceof HttpResponse) {
        console.log(event.body);
      }
    });
    this.postsService.getPosts().subscribe((data) => this.posts = data);
  }

}
