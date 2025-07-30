import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotDePasseService {

  mdp : string | null = null;

  constructor() { }

  setMotDePasse(motDePasse : string){
    this.mdp = motDePasse ?? null;
  }
}
