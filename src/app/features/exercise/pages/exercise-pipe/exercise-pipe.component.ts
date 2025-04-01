import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-pipe",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-pipe.component.html",
	styleUrl: "./exercise-pipe.component.scss",
})
export class ExercisePipeComponent {}
