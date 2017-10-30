import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Posts } from './posts';
import { PostsService } from './posts.service';

@Injectable()
export class PostsResolveGuard implements Resolve<Posts[]> {

  constructor(private postService: PostsService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Posts[]> | Promise<Posts[]> | Posts[] {
    return this.postService.getPosts();
  }
}
