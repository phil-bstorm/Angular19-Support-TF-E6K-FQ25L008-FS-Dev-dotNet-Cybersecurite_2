import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-bindings",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-bindings.component.html",
	styleUrl: "./exercise-bindings.component.scss",
})
export class ExerciseBindingsComponent {
	imageUrlResultat: string = "assets/exercise/binding/resultat.png";

	// Rajoute les variables et méthodes nécessaires ici
}
