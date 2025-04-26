import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const isLoggedIn = !!localStorage.getItem('userLogedIn');

    if (!isLoggedIn) {
      snackBar.open(
        'Tenés que iniciar sesión para acceder al dashboard.',
        'Cerrar',
        {
          duration: 3000,
        }
      );
      router.navigate(['/home']);
      return false;
    }

    return true;
  }

  return false;
};
