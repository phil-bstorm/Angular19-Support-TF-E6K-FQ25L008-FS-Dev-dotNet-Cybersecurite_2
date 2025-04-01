import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-navigation",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-navigation.component.html",
	styleUrl: "./exercise-navigation.component.scss",
})
export class ExerciseNavigationComponent {}
