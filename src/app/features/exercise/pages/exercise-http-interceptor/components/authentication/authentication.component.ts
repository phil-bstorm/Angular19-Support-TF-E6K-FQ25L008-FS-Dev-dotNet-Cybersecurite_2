import {Component, inject, OnInit, Signal} from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { UserApiService } from "../../services/user-api.service";
import { TokenLocalStorageService } from "../../services/token-local-storage.service";
import { IToken } from "../../models/itoken";
import { ILogin } from "../../models/ilogin";

@Component({
	selector: "authentication",
	imports: [ReactiveFormsModule, FormsModule],
	templateUrl: "./authentication.component.html",
	styleUrl: "./authentication.component.scss",
})
export class AuthenticationComponent implements OnInit {
	

	private readonly _fb : FormBuilder = inject(FormBuilder);
	private readonly _userApi : UserApiService = inject(UserApiService);
	private readonly _tokenStorage : TokenLocalStorageService = inject(TokenLocalStorageService);

	forRegister : boolean = true;
	token : Signal<IToken|null> = this._tokenStorage.token;
	user? : ILogin;

	registerForm : FormGroup = this._fb.group({
		email : [null, [Validators.required, Validators.email]],
		password : [null, [Validators.required, Validators.minLength(8), Validators.maxLength(100)]]
	});

	public onSubmit() : void{
		if(this.registerForm.invalid) throw new Error('Formulaire incomplet');
		if(this.forRegister){
			this._userApi.registerUser(this.registerForm.value)
			.subscribe({
				next : (token) => {
					console.log(token);
					this._tokenStorage.setToken(token);
				},
				error : (err) => console.error(err)
				
			});
		}
		else{
			this._userApi.loginUser(this.registerForm.value)
			.subscribe({
				next : (token) => {
					console.log(token);
					this._tokenStorage.setToken(token);
				},
				error : (err) => console.error(err)
				
			});
		}
		this._userApi.getUser(this.token()!.user.id).subscribe(
				{
					next : (user) => this.user = user,
					error : (err) => console.error(err)					
				}
			);
	}

	ngOnInit(): void {
		if(this.token() != null){
			this._userApi.getUser(this.token()!.user.id).subscribe(
				{
					next : (user) => this.user = user,
					error : (err) => console.error(err)					
				}
			);
		}
	}

}
