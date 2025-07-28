import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iarticle } from '../../models/iarticle';
import { ListeCourseService } from '../../services/liste-course.service';

@Component({
  selector: 'ajouter',
  imports: [FormsModule],
  templateUrl: './ajouter.component.html',
  styleUrl: './ajouter.component.scss'
})
export class AjouterComponent {

  private _listeCourse : ListeCourseService = inject(ListeCourseService);
  articleName? : string;
  articleQuantity? : number;

  onAjouter() : void{
    if(!this.articleName) throw new Error("Article name required");
    if(!this.articleQuantity) throw new Error("Article quantity required");
    this.articleName = this.articleName.trim();
    if(!this.articleName) throw new Error("Article name required");
    if(this.articleQuantity <= 0) throw new Error ("Article quantity must be greather than 0");

    let article : Iarticle = {
      name : this.articleName,
      quantity : this.articleQuantity
    };

    this._listeCourse.addArticle(article);
    this.articleName = this.articleQuantity = undefined;
  }

}
