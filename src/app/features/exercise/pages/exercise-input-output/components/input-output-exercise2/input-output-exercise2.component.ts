import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";

@Component({
	selector: "input-output-exercise2",
	imports: [SpoilComponent],
	templateUrl: "./input-output-exercise2.component.html",
	styleUrl: "./input-output-exercise2.component.scss",
})
export class InputOutputExercise2Component {
	imgUrlResultat: string =
		"assets/exercise/input-output/todo-list-resultat.png";
	imgUrlStructure: string =
		"assets/exercise/input-output/todo-list-structure.png";
}
