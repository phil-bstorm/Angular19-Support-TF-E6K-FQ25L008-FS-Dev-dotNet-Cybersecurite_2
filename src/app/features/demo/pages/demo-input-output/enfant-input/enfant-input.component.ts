import {Component, input} from "@angular/core";

@Component({
	selector: "enfant-input",
	imports: [],
	templateUrl: "./enfant-input.component.html",
	styleUrl: "./enfant-input.component.scss",
})
export class EnfantInputComponent {
	// cette variable n'est pas requise lors de l'usage du composant
	valeurOptionnelTransmiseParLeParent = input<string>("");

	// cette variable est requise lors de l'usage du composant
	valeurRequiseTransmiseParLeParent = input.required<string>();
}
