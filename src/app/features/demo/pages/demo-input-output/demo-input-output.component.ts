import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {EnfantInputComponent} from "@app/features/demo/pages/demo-input-output/enfant-input/enfant-input.component";
import {EnfantOutputComponent} from "@app/features/demo/pages/demo-input-output/enfant-output/enfant-output.component";

@Component({
	selector: "demo-input-output",
	imports: [DemoHeaderComponent, EnfantInputComponent, EnfantOutputComponent],
	templateUrl: "./demo-input-output.component.html",
	styleUrl: "./demo-input-output.component.scss",
})
export class DemoInputOutputComponent {
	maVariable: string = "Je suis une variable !";

	notify(message: string) {
		alert("Message de l'enfant : " + message);
	}
}
