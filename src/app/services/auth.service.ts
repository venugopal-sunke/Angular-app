import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   get isUserLoggedIn(): boolean{
     return true;
   }

   get isCanActivateChild(){
    return false;
   }

   get isDeactivateGuard(): boolean{
      return true;
      
   }

   userObj = {
     id: 10,
     userName: 'Venugopal'
   }

  //  get resolverGuard(){
  //   return this.userObj;
  //  }

  get resolverGuard(){
    return of(this.userObj).pipe(delay(1000));
   }

}
