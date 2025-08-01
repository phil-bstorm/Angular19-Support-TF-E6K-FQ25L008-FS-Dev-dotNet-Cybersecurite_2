import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookApiService } from '../../services/book-api.service';
import { Ibook } from '../../models/ibook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-create',
  imports: [ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.scss'
})
export class BookCreateComponent {
  private readonly _fb : FormBuilder = inject(FormBuilder);
  private readonly _bookApi : BookApiService = inject(BookApiService);
  private readonly _router : Router = inject(Router);
  private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);

  createForm : FormGroup = this._fb.group({
    title : [null, [Validators.required, Validators.minLength(2)]],
    author : [null, [Validators.required, Validators.minLength(2)]],
    description : [null, [Validators.required, Validators.minLength(8)]],
    releaseDate : [null, [Validators.required]],
    isbn : [null, [Validators.required,Validators.pattern(/^[0-9]{3}-[0-9]{1}-[0-9]{6}-[0-9]{2}-[0-9]{1}$/)]]
  })

  onSubmit() :void {
    if(this.createForm.invalid) throw new Error('Formulaire invalide');
    let newBook : Ibook = {
      id : 0,
      title : this.createForm.value.title,
      author : this.createForm.value.author,
      description : this.createForm.value.description,
      releaseDate : this.createForm.value.releaseDate,
      isbn : this.createForm.value.isbn    
    };

    this._bookApi.createBook(newBook).subscribe({
      next : (data) => {
        console.log(data);
        this._router.navigate(['../','list'], {relativeTo : this._activatedRoute});
      }
    });
  }
}
