import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {ColorPickerComponent} from "./color-picker/color-picker.component";

@Component({
	selector: "input-output-exercise1",
	imports: [SpoilComponent, ColorPickerComponent],
	templateUrl: "./input-output-exercise1.component.html",
	styleUrl: "./input-output-exercise1.component.scss",
})
export class InputOutputExercise1Component {
	imgUrlResultat: string =
		"assets/exercise/input-output/color-picker-resultat.png";
	imgUrlStructure: string =
		"assets/exercise/input-output/color-picker-structure.png";

	colors: string[] = ["red", "blue", "green", "yellow", "purple"];
	selectedColor: string = "red";

	onColorUpdate(newColor: string) {
		this.selectedColor = newColor;
	}
}
