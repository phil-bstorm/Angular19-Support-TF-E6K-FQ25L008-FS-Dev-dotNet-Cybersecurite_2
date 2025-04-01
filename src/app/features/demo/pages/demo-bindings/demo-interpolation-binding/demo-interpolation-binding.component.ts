import {Component} from "@angular/core";
import {JsonPipe} from "@angular/common";

@Component({
	selector: "demo-interpolation-binding",
	imports: [JsonPipe],
	templateUrl: "./demo-interpolation-binding.component.html",
	styleUrl: "./demo-interpolation-binding.component.scss",
})
export class DemoInterpolationBindingComponent {
	chaineDeCaracteres = "Hello World!";
	nombre = 30;
	date = new Date();
	tableau = ["un", "deux", "trois"];
	booleen = true;
	unNull = null;
	unUndefined = undefined;
	objet = {nom: "Doe", prenom: "John"};
}
