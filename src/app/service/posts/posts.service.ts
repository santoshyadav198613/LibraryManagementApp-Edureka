import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Posts } from './posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Posts[]>('http://jsonplaceholder.typicode.com/posts',
      { headers: new HttpHeaders().set('token', 'thisistoken').set('newtoken', 'thisisnew Token') });
  }

  addPost(post: Posts) {
    return this.http.post('http://jsonplaceholder.typicode.com/posts', post)
  }

  getPostsData() {
    const httpRequest = new HttpRequest('GET', 'http://jsonplaceholder.typicode.com/posts', { reportProgress: true });
    return this.http.request(httpRequest);
  }

}
