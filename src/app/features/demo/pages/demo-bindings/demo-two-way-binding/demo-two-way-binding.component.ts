import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "demo-two-way-binding",
	imports: [FormsModule],
	templateUrl: "./demo-two-way-binding.component.html",
	styleUrl: "./demo-two-way-binding.component.scss",
})
export class DemoTwoWayBindingComponent {
	maVariable1: string = "";
	maVariable2: number = 0;
	maVariable3: boolean = false;
	rangeValue: number = 50;
	rangeMax: number = 100;
	rangeMin: number = 0;

	changeValue(text: KeyboardEvent | any) {
		this.maVariable1 = text.target.value;
	}
}
