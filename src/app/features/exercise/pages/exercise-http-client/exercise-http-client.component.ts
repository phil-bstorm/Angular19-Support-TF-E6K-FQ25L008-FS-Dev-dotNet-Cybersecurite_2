import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-http-client",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-http-client.component.html",
	styleUrl: "./exercise-http-client.component.scss",
})
export class ExerciseHttpClientComponent {}
