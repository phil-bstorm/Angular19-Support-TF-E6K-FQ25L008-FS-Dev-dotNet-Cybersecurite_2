import { ValidatorFn } from "@angular/forms";

export function checkBirthdate() : ValidatorFn{
    return control =>{
        let value = control.value
        if(!value) return null;
        let birthdate = new Date(value);
        let yearsOld = new Date(new Date().getTime() - birthdate.getTime()).getFullYear() - 1970;

        if(yearsOld > 115) return {checkbirthdate : true}
        return null;
    }
}