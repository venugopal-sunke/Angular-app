import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

  constructor() { }

  getAuthenticateService(): string{
    return 'I am Authentication Service';
   }

   isLoggedIn: boolean = false;
}
