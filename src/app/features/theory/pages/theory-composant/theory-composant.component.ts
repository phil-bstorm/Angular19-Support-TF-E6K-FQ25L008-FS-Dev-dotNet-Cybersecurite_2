import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-composant",
	imports: [ChapterNavigationComponent, HighlightJsDirective],
	templateUrl: "./theory-composant.component.html",
	styleUrl: "./theory-composant.component.scss",
})
export class TheoryComposantComponent {
	imageUrlAppComponentFiles =
		"assets/theory/composant/app-component-files.png";
}
