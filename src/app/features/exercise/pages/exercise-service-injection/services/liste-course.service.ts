import { Iarticle } from './../models/iarticle';
import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeCourseService {

  articles : WritableSignal<Iarticle[]> = signal<Iarticle[]>([]);
  private _articles : Iarticle[] = [];

  constructor() { }

  addArticle(newArticle : Iarticle) : void{
    if(this._articles.find(a => a.name == newArticle.name)) {
      this.changeQuantity(newArticle);
    }
    else{
      this._articles.push(newArticle);
      this.articles.set(this._articles);
    }
  }

  changeQuantity(article : Iarticle): void{
    let articleFromList : Iarticle | undefined = this._articles.find(a => a.name == article.name);
    if(!articleFromList) throw new Error("Article not found");
    articleFromList.quantity = article.quantity;
    if(articleFromList.quantity <= 0)this.deleteArticle(article.name);
    this.articles.set(this._articles);
  }

  addOneQuantity(articleName : string) : void{
    let articleFromList : Iarticle | undefined = this._articles.find(a => a.name == articleName);
    if(!articleFromList) throw new Error("Article not found");
    articleFromList.quantity += 1;
    this.articles.set(this._articles);
  }
  
  subOneQuantity(articleName : string) : void{
    let articleFromList : Iarticle | undefined = this._articles.find(a => a.name == articleName);
    if(!articleFromList) throw new Error("Article not found");
    articleFromList.quantity -= 1;
    if(articleFromList.quantity <= 0)this.deleteArticle(articleName);
    this.articles.set(this._articles);
  }

  deleteArticle(articleName : string) : void{
    let articleFromList : Iarticle | undefined = this._articles.find(a => a.name == articleName);
    if(!articleFromList) throw new Error("Article not found");
    this._articles = this._articles.filter(a => a != articleFromList);
    this.articles.set(this._articles);
  }
}
