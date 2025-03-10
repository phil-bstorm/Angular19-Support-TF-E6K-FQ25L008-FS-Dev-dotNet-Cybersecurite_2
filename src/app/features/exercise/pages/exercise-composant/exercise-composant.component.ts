import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {AnimalerieComponent} from "@app/features/exercise/pages/exercise-composant/animalerie/animalerie.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "exercise-composant",
	imports: [
		ChapterNavigationComponent,
		SpoilComponent,
		AnimalerieComponent,
		HighlightJsDirective,
	],
	templateUrl: "./exercise-composant.component.html",
	styleUrl: "./exercise-composant.component.scss",
})
export class ExerciseComposantComponent {
	imgUrlAnimalerie = "assets/exercise/composant/animalerie.png";
	imgUrlAnimalerieStructure =
		"assets/exercise/composant/animalerie-structure.png";
}
