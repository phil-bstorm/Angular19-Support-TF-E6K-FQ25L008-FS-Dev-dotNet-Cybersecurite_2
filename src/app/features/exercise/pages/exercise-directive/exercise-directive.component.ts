import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-directive",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-directive.component.html",
	styleUrl: "./exercise-directive.component.scss",
})
export class ExerciseDirectiveComponent {}
