import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  constructor() { }

  login(user: User): boolean {
    if (user.userName === 'Admin' && user.password === 'Admin') {
      this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }
}
