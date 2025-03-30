import {Component, inject} from "@angular/core";
import {ChapterNavigationService} from "@shared/components/chapter-navigation/services/chapter-navigation.service";
import {HighlightJsDirective} from "ngx-highlight-js";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-base-routing-navigation",
	imports: [HighlightJsDirective, DemoHeaderComponent],
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
