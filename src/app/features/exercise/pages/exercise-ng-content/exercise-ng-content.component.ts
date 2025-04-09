import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {CadrePhotoComponent} from "@app/features/exercise/pages/exercise-ng-content/cadre-photo/cadre-photo.component";

@Component({
	selector: "exercise-ng-content",
	imports: [ExerciseHeaderComponent, SpoilComponent, CadrePhotoComponent],
	templateUrl: "./exercise-ng-content.component.html",
	styleUrl: "./exercise-ng-content.component.scss",
})
export class ExerciseNgContentComponent {
	imgUrlResultat: string = "assets/exercise/ng-content/resultat.png";

	catHuh: string = "assets/memes/Cat-Huh.gif";
}
