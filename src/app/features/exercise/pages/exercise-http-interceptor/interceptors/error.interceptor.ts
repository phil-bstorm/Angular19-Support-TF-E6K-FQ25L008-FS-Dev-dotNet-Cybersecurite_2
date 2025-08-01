import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { TokenLocalStorageService } from '../services/token-local-storage.service';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router:Router = inject(Router);
  const _tokenStorage: TokenLocalStorageService = inject(TokenLocalStorageService);

  return next(req).pipe(
    catchError(error => {
      console.log(error);

      if(error.status === 401){
        _tokenStorage.clearToken();
        return throwError(() => null);
      }
      return throwError(() => error);
    }));
};
