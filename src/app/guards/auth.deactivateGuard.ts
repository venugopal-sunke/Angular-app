import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authDeactivateGuard = () => {
  const authService = inject(AuthService);
 // const router = inject(Router);

  if (authService.isDeactivateGuard) {
    return true;
  } else {
    alert("User is leaving the route, CanDeactivateGuard")
    return false;
  }
};