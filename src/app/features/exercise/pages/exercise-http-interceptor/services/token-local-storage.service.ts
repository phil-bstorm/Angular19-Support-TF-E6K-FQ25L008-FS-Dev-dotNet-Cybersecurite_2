import { Injectable, signal } from '@angular/core';
import { IToken } from '../models/itoken';

@Injectable({
  providedIn: 'root'
})
export class TokenLocalStorageService {
  private key : string = 'token';

  token = signal<IToken | null>(this.getToken());

  constructor() { }

  setToken(token : IToken) : void{
    localStorage.setItem(this.key, JSON.stringify(token));
    this.token.set(this.getToken());
  }

  getToken() : IToken | null{
    return JSON.parse(localStorage.getItem(this.key) ?? 'null');
  }

  clearToken() : void{
    localStorage.removeItem(this.key);
    this.token.set(this.getToken());
  }
}
