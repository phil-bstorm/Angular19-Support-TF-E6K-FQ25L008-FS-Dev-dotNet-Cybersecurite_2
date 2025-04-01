import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-interceptor",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-interceptor.component.html",
	styleUrl: "./exercise-interceptor.component.scss",
})
export class ExerciseInterceptorComponent {}
