import { OnDestroy } from '@angular/core';
import { Component, inject, OnInit } from '@angular/core';
import { BookApiService } from '../../services/book-api.service';
import { Ibook } from '../../models/ibook';
import { endWith, Subscription } from 'rxjs';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';

@Component({
  selector: 'book-list',
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent implements OnInit, OnDestroy{
  private readonly _bookApi : BookApiService = inject(BookApiService);
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  
  books! : Ibook[];

  nbBook : number = 5;
  page : number = 1;

  
  subBooks : Subscription | null = null;
  subDelete : Subscription | null = null;
  
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe({
      next : (queryParams : Params) =>{
        console.log(queryParams);
        if(queryParams['nbBook']) this.nbBook = parseInt(queryParams['nbBook']);
        if(queryParams['page']) this.page = parseInt(queryParams['page']);

        console.log(this.page);
        console.log(this.nbBook);
      },
      error : (err) => console.error(err)
    });
    this.subBooks = this._bookApi.getAllBooks()
    .subscribe({
      next : (books) => {
        this.books = books;
        this.subBooks?.unsubscribe();
        this.subBooks = null;
      },
      error : (err) => console.error(err)
    });
  }

  ngOnDestroy(): void {
    this.subBooks?.unsubscribe();
    this.subDelete?.unsubscribe();
    this.subBooks = this.subDelete = null;
  }

  onDeleteBook(id: number){
    this.subDelete = this._bookApi.deleteBook(id)
    .subscribe({
      next : (data) => {
        this.books = this.books.filter(b => b.id != id);
        this.subDelete?.unsubscribe();
        this.subDelete = null;
      },
      error : (err) => console.error(err)
    });
  }

  public getBooksPagination() : Ibook[]{
    let startIndex : number = (this.page-1)*this.nbBook;
    let endIndex : number = startIndex + this.nbBook;
    return this.books.slice(startIndex, endIndex );
  }
}
