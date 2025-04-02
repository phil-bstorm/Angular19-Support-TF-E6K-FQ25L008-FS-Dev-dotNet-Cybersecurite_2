import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-ng-content",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-ng-content.component.html",
	styleUrl: "./exercise-ng-content.component.scss",
})
export class ExerciseNgContentComponent {}
