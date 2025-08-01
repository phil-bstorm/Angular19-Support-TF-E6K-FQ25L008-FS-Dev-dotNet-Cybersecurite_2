import { Routes } from "@angular/router";
import { BookComponent } from "./book/book.component";
import { BookListComponent } from "./book-list/book-list.component";

export const routes : Routes = [
    {
        path : 'list',
        component : BookListComponent
    },
    {
        path : 'create',
        loadComponent : ()=> import('./book-create/book-create.component').then(c => c.BookCreateComponent)
    },
    {
        path : 'update/:id',
        loadComponent : ()=> import('./book-update/book-update.component').then(c => c.BookUpdateComponent)
    },
    {
        path : '',
        redirectTo : 'list',
        pathMatch : 'full'
    }
]