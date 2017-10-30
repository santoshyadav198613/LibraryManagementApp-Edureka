import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { PostsService } from '../../service/posts/posts.service';
import { Posts } from '../../service/posts/posts';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Posts[];
  constructor(private postsService: PostsService,
    private routeService: ActivatedRoute) { }

  ngOnInit() {
    // this.postsService.getPostsData().subscribe((event) => {
    //   if (event.type === HttpEventType.DownloadProgress) {
    //     console.log(event.total);
    //     console.log(event.loaded);
    //   }
    //   else if (event instanceof HttpResponse) {
    //     console.log(event.body);
    //   }
    // });
    this.routeService.data.subscribe((result) => this.posts= result['postsList']);
    //this.postsService.getPosts().subscribe((data) => this.posts = data);
  }

}
