import {Component, output} from "@angular/core";

@Component({
	selector: "enfant-output",
	imports: [],
	templateUrl: "./enfant-output.component.html",
	styleUrl: "./enfant-output.component.scss",
})
export class EnfantOutputComponent {
	envoyerMessage = output<string>();

	triggerMessage() {
		this.envoyerMessage.emit("J'ai faim.");
	}
}
