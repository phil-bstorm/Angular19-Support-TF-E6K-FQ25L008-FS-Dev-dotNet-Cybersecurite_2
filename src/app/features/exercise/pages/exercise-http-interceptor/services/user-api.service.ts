import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILogin } from '../models/ilogin';
import { IToken } from '../models/itoken';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private readonly _http : HttpClient = inject(HttpClient);
  private URL_API : string = 'http://localhost:3000/';

  constructor() { }

  registerUser(login : ILogin) : Observable<IToken>{
    return this._http.post<IToken>(this.URL_API + 'register/', login );
  }

  loginUser(login : ILogin) : Observable<IToken>{
    return this._http.post<IToken>(this.URL_API + 'login/', login );
  }

  getUser(id : number) : Observable<ILogin>{
    return this._http.get<ILogin>(this.URL_API + 'users/' + id);
  }
}
