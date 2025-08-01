import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibook } from '../models/ibook';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private readonly _http : HttpClient = inject(HttpClient);
  private URL_API : string = "http://localhost:3000/books/";

  constructor() { }

  public getAllBooks() : Observable<Ibook[]>{
    return this._http.get<Ibook[]>(this.URL_API);
  }
  
  public getBook(id : number) : Observable<Ibook>{
    return this._http.get<Ibook>(this.URL_API + id);
  }

  public createBook(newBook : Ibook) : Observable<Ibook>{
    return this._http.post<Ibook>(this.URL_API, newBook);
  }

  public updateBook(id : number, newValue : Ibook) : Observable<Ibook> {
    return this._http.put<Ibook>(this.URL_API + id, newValue);
  }

  public deleteBook(id : number) : Observable<null>{
    return this._http.delete<null>(this.URL_API + id);
  }
}
