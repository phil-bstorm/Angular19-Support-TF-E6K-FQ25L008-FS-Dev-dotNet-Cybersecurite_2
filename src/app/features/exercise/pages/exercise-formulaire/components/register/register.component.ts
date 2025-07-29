import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { checkBirthdate } from '../../validators/check-birthdate';
import { CustomValidatorsService } from '../../services/custom-validators.service';

@Component({
  selector: 'register',
  imports: [ReactiveFormsModule],
  providers : [CustomValidatorsService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
// constructor(private _fb : FormBuilder){}

	private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _validators : CustomValidatorsService = inject(CustomValidatorsService);

	addresses = this._fb.array([
		this.generateAddressFormGroup()
	]);

	registerForm : FormGroup = this._fb.group({
		email : [null,[Validators.required,Validators.email]],
		password : [null,[
      Validators.required, 
      Validators.minLength(8), 
      Validators.maxLength(100),
      Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[+\-\\\.$µ%=@]).{8,100}$/)
    ]],
		birthdate : [null,[Validators.required, this._validators.checkBirthdate(115)]],
		addresses : this.addresses
	});

  private generateAddressFormGroup() {
    return this._fb.group({
			street : [null,[Validators.required]],
			number : [null,[Validators.required]],
			city : [null,[Validators.required]],
			zipCode : [null,[Validators.required]],
			country : [null,[Validators.required]]
		})
  }

  onSubmit() : void{
    if(this.registerForm.invalid) throw new Error('Formulaire non-valide');
    console.log(this.registerForm.value);
  }

  onAddAddress() : void{
    this.addresses.push(this.generateAddressFormGroup());
  }

  onRemoveAddress(index : number) : void{
    if(index < 0 || index >= this.addresses.length) throw new Error("L'indice dépasse les limites du formArray");
    this.addresses.removeAt(index);
  }

}
