import {Component, inject} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {UserService} from "@app/features/demo/pages/demo-service-injection/services/user.service";
import {NgClass} from "@angular/common";

@Component({
	selector: "demo-service-injection",
	imports: [DemoHeaderComponent, NgClass],
	templateUrl: "./demo-service-injection.component.html",
	styleUrl: "./demo-service-injection.component.scss",
})
export class DemoServiceInjectionComponent {
	private readonly _userService = inject(UserService);

	/* SANS SIGNAL (bad) */
	isUserConnectedV = this._userService.isConnectedV; // on lie la variable du service à une variable du composant (car le service est privé et ne peut pas être utliser dans l'HTML)
	updateIsconenctedV() {
		this._userService.isConnectedV = true;
		this.isUserConnectedV = this._userService.isConnectedV; // il faut mettre à jour la variable du composant pour que le template soit mis à jour
	}

	/* AVEC SIGNAL */
	isUserConnected = this._userService.isConnected; // on lie le signal à une variable du composant (car le service est privé et ne peut pas être utliser dans l'HTML)
	updateIsconencted() {
		this._userService.isConnected.set(!this._userService.isConnected());
	}
}
