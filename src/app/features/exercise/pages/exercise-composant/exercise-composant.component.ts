import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {AnimalerieComponent} from "@app/features/exercise/pages/exercise-composant/animalerie/animalerie.component";
import {HighlightJsDirective} from "ngx-highlight-js";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-composant",
	imports: [
		SpoilComponent,
		AnimalerieComponent,
		HighlightJsDirective,
		ExerciseHeaderComponent,
	],
	templateUrl: "./exercise-composant.component.html",
	styleUrl: "./exercise-composant.component.scss",
})
export class ExerciseComposantComponent {
	imgUrlAnimalerie = "assets/exercise/composant/animalerie.png";
	imgUrlAnimalerieStructure =
		"assets/exercise/composant/animalerie-structure.png";
}
