import { inject } from '@angular/core';
import { TokenLocalStorageService } from './../services/token-local-storage.service';
import { HttpInterceptorFn } from '@angular/common/http';
import { IToken } from '../models/itoken';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const _tokenStorage: TokenLocalStorageService = inject(TokenLocalStorageService);
  const tokenData :IToken | null = _tokenStorage.getToken();

  if (tokenData) {
    const token = tokenData.accessToken;
    const requestClone = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + token),
    });
    return next(requestClone);
  }
  return next(req);
};
