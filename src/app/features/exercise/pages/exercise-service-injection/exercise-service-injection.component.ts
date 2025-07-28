import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import { AjouterComponent } from "./components/ajouter/ajouter.component";
import { ListerComponent } from "./components/lister/lister.component";

@Component({
	selector: "exercise-service-injection",
	imports: [ExerciseHeaderComponent, SpoilComponent, AjouterComponent, ListerComponent],
	templateUrl: "./exercise-service-injection.component.html",
	styleUrl: "./exercise-service-injection.component.scss",
})
export class ExerciseServiceInjectionComponent {
	imgUrlResultat: string = "/assets/exercise/service/resultat.png";
}
