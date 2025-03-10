import {Component, inject} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {ChapterNavigationService} from "@shared/components/chapter-navigation/services/chapter-navigation.service";
import {HighlightJsDirective} from "ngx-highlight-js";
import {RouterLink} from "@angular/router";

@Component({
	selector: "demo-base-routing-navigation",
	imports: [ChapterNavigationComponent, HighlightJsDirective],
	templateUrl: "./demo-base-routing-navigation.component.html",
	styleUrl: "./demo-base-routing-navigation.component.scss",
})
export class DemoBaseRoutingNavigationComponent {
	private readonly _chapterNavService: ChapterNavigationService = inject(
		ChapterNavigationService,
	);
	theoryIndex = this._chapterNavService.currentIndex;
	imgUrlBookIndexStructure: string =
		"assets/demo/routing-navigation/book-index-structure.png";
	imgUrlBookRoutesStructure: string =
		"assets/demo/routing-navigation/book-routes-structure.png";
}
