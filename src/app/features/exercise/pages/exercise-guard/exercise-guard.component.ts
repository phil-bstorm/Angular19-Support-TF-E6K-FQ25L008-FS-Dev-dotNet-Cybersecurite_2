import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {EntreeComponent} from "@app/features/exercise/pages/exercise-guard/pages/entree/entree.component";

@Component({
	selector: "exercise-guard",
	imports: [ExerciseHeaderComponent, SpoilComponent, EntreeComponent],
	templateUrl: "./exercise-guard.component.html",
	styleUrl: "./exercise-guard.component.scss",
})
export class ExerciseGuardComponent {
	imgUrlRepresentation = "assets/exercise/guard/representation.png";
	imgUrlResult = "assets/exercise/guard/resultat.png";
	imgUrlStructure = "assets/exercise/guard/structure.png";
}
