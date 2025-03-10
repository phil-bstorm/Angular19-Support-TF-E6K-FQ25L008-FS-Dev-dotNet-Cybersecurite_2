import {Component, inject} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {ChapterNavigationService} from "@shared/components/chapter-navigation/services/chapter-navigation.service";
import {RouterLink} from "@angular/router";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "exercise-base-routing-navigation",
	imports: [
		SpoilComponent,
		ChapterNavigationComponent,
		RouterLink,
		HighlightJsDirective,
	],
	templateUrl: "./exercise-base-routing-navigation.component.html",
	styleUrl: "./exercise-base-routing-navigation.component.scss",
})
export class ExerciseBaseRoutingNavigationComponent {
	private readonly _chapterNavService: ChapterNavigationService = inject(
		ChapterNavigationService,
	);
	currentIndex = this._chapterNavService.currentIndex;

	labyrintheUrl: string = `/exercise/${this.currentIndex()}/labyrinthe`;

	imgUrlLabyrinthe: string =
		"assets/exercise/routing-navigation/labyrinthe.png";
	imgUrlFolderStructure: string =
		"assets/exercise/routing-navigation/labyrinthe-folder-structure.png";
	imgUrlCompleteStructure: string =
		"assets/exercise/routing-navigation/labyrinthe-complete-structure.png";
}
