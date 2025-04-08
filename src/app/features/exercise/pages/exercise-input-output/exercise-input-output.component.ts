import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {InputOutputExercise1Component} from "@app/features/exercise/pages/exercise-input-output/components/input-output-exercise1/input-output-exercise1.component";
import {InputOutputExercise2Component} from "@app/features/exercise/pages/exercise-input-output/components/input-output-exercise2/input-output-exercise2.component";

@Component({
	selector: "exercise-input-output",
	imports: [
		ExerciseHeaderComponent,
		InputOutputExercise1Component,
		InputOutputExercise2Component,
	],
	templateUrl: "./exercise-input-output.component.html",
	styleUrl: "./exercise-input-output.component.scss",
})
export class ExerciseInputOutputComponent {}
