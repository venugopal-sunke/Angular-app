import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authResolveGuard = () => {
  const authService = inject(AuthService);

  //This guard is to fetch some api response data and will assign to resolve guard
  return authService.resolverGuard;
  
};