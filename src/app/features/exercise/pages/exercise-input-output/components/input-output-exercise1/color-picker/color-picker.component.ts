import {Component, input, output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "color-picker",
	imports: [FormsModule],
	templateUrl: "./color-picker.component.html",
	styleUrl: "./color-picker.component.scss",
})
export class ColorPickerComponent {
	// Input pour récupérer la valeur transmise par le parent
	possibleColors = input.required<string[]>();

	// Ouput pour préparer un event à envoyer au parent
	colorUpdate = output<string>();

	colorPicked: string = "";

	// méthode pour le clique du bouton
	onColorChanged() {
		this.colorUpdate.emit(this.colorPicked);
	}
}
