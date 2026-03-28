import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authChildGuard = () => {
  const authService = inject(AuthService);
 // const router = inject(Router);

  if (authService.isCanActivateChild) {
    return true;
  } else {
    alert("User is not allowed to access child routes, Implemented CanActivateChild");
    return false;
  }
};