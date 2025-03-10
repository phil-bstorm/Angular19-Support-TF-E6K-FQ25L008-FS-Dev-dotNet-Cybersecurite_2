import {Component} from "@angular/core";

@Component({
	selector: "spoil",
	imports: [],
	templateUrl: "./spoil.component.html",
	styleUrl: "./spoil.component.scss",
})
export class SpoilComponent {
	isSpoiled: boolean = false;

	toggle() {
		this.isSpoiled = !this.isSpoiled;
	}
}
