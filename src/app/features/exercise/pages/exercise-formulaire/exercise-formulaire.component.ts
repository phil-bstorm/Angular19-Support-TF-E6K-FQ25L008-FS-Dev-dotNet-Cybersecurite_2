import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import { RegisterComponent } from "./components/register/register.component";

@Component({
	selector: "exercise-formulaire",
	imports: [ExerciseHeaderComponent, RegisterComponent],
	templateUrl: "./exercise-formulaire.component.html",
	styleUrl: "./exercise-formulaire.component.scss",
})
export class ExerciseFormulaireComponent {
	
}
