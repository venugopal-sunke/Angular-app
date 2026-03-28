// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService){

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(this.authService.isUserLoggedIn){
//         return true;
//       }else{
//         alert("User is not allowed to access Services")
//         return false;
//       }
//     return true;
//   }
  
// }

//canActivate guard is deprecated in angular15 , alternate approach

import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
 // const router = inject(Router);

  if (authService.isUserLoggedIn) {
    return true;
  } else {
    alert("User is not allowed to access this page")
    return false;
  }
};
