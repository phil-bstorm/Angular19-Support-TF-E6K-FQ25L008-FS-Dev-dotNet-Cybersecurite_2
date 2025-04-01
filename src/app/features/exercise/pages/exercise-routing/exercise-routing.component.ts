import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-routing",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-routing.component.html",
	styleUrl: "./exercise-routing.component.scss",
})
export class ExerciseRoutingComponent {}
