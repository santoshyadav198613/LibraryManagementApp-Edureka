import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Posts } from './posts';
import { APP_CONFIG, API_CONFIG } from '../valueProvider/value.service';
import { IValueProvider } from '../valueProvider/IvalueProvider';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private appConfig: IValueProvider) { }

  getPosts() {
    return this.http.get<Posts[]>(this.appConfig.baseUrl + 'posts',
      { headers: new HttpHeaders().set('token', 'thisistoken').set('newtoken', 'thisisnew Token') });
  }

  addPost(post: Posts) {
    return this.http.post(this.appConfig.baseUrl + 'posts', post)
  }

  getPostsData() {
    const httpRequest = new HttpRequest('GET', this.appConfig.baseUrl + 'posts', { reportProgress: true });
    return this.http.request(httpRequest);
  }

}
