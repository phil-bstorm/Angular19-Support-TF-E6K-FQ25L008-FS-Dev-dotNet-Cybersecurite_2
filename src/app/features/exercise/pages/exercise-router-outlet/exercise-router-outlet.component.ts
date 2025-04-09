import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-router-outlet",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-router-outlet.component.html",
	styleUrl: "./exercise-router-outlet.component.scss",
})
export class ExerciseRouterOutletComponent {}
