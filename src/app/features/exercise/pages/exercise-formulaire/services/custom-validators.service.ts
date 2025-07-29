import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }
 
  checkBirthdate(maxAge : number = 115) : ValidatorFn{
    return (control) =>{
        let value = control.value
        if(!value) return null;
        let birthdate = new Date(value);
        let yearsOld = new Date(new Date().getTime() - birthdate.getTime()).getFullYear() - 1970;

        if(yearsOld > maxAge) return {checkbirthdate : true}
        return null;
    }
  }
}
