import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-guard",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-guard.component.html",
	styleUrl: "./exercise-guard.component.scss",
})
export class ExerciseGuardComponent {}
