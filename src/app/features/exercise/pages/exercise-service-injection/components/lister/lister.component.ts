import { Component, OnInit } from '@angular/core';
import { Iarticle } from '../../models/iarticle';
import { ListeCourseService } from '../../services/liste-course.service';

@Component({
  selector: 'lister',
  imports: [],
  templateUrl: './lister.component.html',
  styleUrl: './lister.component.scss'
})
export class ListerComponent{

  public get articles() : Iarticle[]{
    return this._courseService.articles();
  }

  constructor(private _courseService : ListeCourseService){}
  
  onClickMinus(articleName : string){
    this._courseService.subOneQuantity(articleName);
  }

  onClickPlus(articleName : string){
    this._courseService.addOneQuantity(articleName);
  }

}
