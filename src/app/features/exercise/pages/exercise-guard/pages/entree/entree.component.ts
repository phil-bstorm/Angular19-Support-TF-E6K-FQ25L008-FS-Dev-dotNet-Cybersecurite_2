import {Component, inject} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MotDePasseService } from "../../services/mot-de-passe.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "entree",
	imports: [FormsModule],
	templateUrl: "./entree.component.html",
	styleUrl: "./entree.component.scss",
})
export class EntreeComponent {
	private readonly _mdpService : MotDePasseService = inject(MotDePasseService);
	private readonly _router : Router = inject(Router);
	private readonly _activatedRoute : ActivatedRoute = inject(ActivatedRoute);

	mdp? : string;

	onValidate() : void{
		if(!this.mdp) throw new Error('Enter a password');
		this._mdpService.setMotDePasse(this.mdp);
		//this._router.navigate(['/','exercise','14','bon-mdp']);	//Route absolue car la première valeur du tableau est '/'
		this._router.navigate(
			['bon-mdp'],
			{ relativeTo: this._activatedRoute }					//Route relative grace à l'option relativeTo
		);
	}
}
