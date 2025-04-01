import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-resolver",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-resolver.component.html",
	styleUrl: "./exercise-resolver.component.scss",
})
export class ExerciseResolverComponent {}
