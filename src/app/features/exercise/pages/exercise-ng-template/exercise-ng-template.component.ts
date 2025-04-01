import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-ng-template",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-ng-template.component.html",
	styleUrl: "./exercise-ng-template.component.scss",
})
export class ExerciseNgTemplateComponent {}
