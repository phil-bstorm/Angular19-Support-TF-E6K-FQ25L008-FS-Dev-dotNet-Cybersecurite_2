import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-storage",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-storage.component.html",
	styleUrl: "./exercise-storage.component.scss",
})
export class ExerciseStorageComponent {}
