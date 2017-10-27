import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewinterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if (req.method === 'GET') {
      const newRequest = req.clone(
        { headers: req.headers.set('postToken', 'thisispostToken') }
      );
      console.log(newRequest);
      return next.handle(newRequest);
    }
    return next.handle(req);
  }
}
