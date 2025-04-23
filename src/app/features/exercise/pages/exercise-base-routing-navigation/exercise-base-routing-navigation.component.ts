import {Component, inject} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {ChapterNavigationService} from "@shared/components/chapter-navigation/services/chapter-navigation.service";
import {RouterLink} from "@angular/router";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";

@Component({
	selector: "exercise-base-routing-navigation",
	imports: [SpoilComponent, RouterLink, ExerciseHeaderComponent],
	templateUrl: "./exercise-base-routing-navigation.component.html",
	styleUrl: "./exercise-base-routing-navigation.component.scss",
})
export class ExerciseBaseRoutingNavigationComponent {
	private readonly _chapterNavService: ChapterNavigationService = inject(
		ChapterNavigationService,
	);
	currentIndex = this._chapterNavService.currentIndex;

	imgUrlLabyrinthe: string =
		"assets/exercise/routing-navigation/labyrinthe.png";
	imgUrlFolderStructure: string =
		"assets/exercise/routing-navigation/labyrinthe-folder-structure.png";
	imgUrlCompleteStructure: string =
		"assets/exercise/routing-navigation/labyrinthe-complete-structure.png";
}
