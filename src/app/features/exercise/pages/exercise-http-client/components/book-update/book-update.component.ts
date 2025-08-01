import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookApiService } from '../../services/book-api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ibook } from '../../models/ibook';

@Component({
  selector: 'book-update',
  imports: [ReactiveFormsModule],
  templateUrl: './book-update.component.html',
  styleUrl: './book-update.component.scss'
})
export class BookUpdateComponent implements OnInit {
  private readonly _fb : FormBuilder = inject(FormBuilder);
  private readonly _bookApi : BookApiService = inject(BookApiService);
  private readonly _router : Router = inject(Router);
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);
  
  editForm! : FormGroup;
  bookToEdit! : Ibook;
  id! : number;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next : (params : Params) => {
        this.id = params['id'];
        this._bookApi.getBook(this.id).subscribe({
          next: (book : Ibook) => {
            this.bookToEdit = book;
            this.editForm = this.generateEditForm();
            console.log(this.editForm);
          },
          error : (err) => console.error(err)
        })
      },
      error : (err) => console.error(err)
    });
  }

  private generateEditForm() : FormGroup{
    return this._fb.group({
      title : [this.bookToEdit.title, [Validators.required, Validators.minLength(2)]],
      author : [this.bookToEdit.author, [Validators.required, Validators.minLength(2)]],
      description : [this.bookToEdit.description, [Validators.required, Validators.minLength(8)]],
      releaseDate : [this.bookToEdit.releaseDate, [Validators.required]],
      isbn : [this.bookToEdit.isbn, [Validators.required,Validators.pattern(/^[0-9]{3}-[0-9]{1}-[0-9]{6}-[0-9]{2}-[0-9]{1}$/)]]
    });
  }

  onSubmit() :void {
    if(this.editForm.invalid) throw new Error('Formulaire invalide');
    let newBook : Ibook = {
      id : this.id,
      title : this.editForm.value.title,
      author : this.editForm.value.author,
      description : this.editForm.value.description,
      releaseDate : this.editForm.value.releaseDate,
      isbn : this.editForm.value.isbn    
    };

    this._bookApi.updateBook(this.id, newBook).subscribe({
      next : (data) => {
        console.log(data);
        this._router.navigate(['../../','list'], {relativeTo : this._activatedRoute});
      }
    });
  }
}
