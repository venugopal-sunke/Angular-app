import { Injectable } from '@angular/core';

@Injectable()
export class FakeauthenticateService {

  constructor() { }

  getAuthenticateService():string {
    return 'I am Fake Authentication Service'
  }

  isLoggedIn: boolean = false;
}
