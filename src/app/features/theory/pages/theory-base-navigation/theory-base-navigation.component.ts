import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {HighlightJsDirective} from "ngx-highlight-js";
import {RouterLink} from "@angular/router";

@Component({
	selector: "theory-base-navigation",
	imports: [ChapterNavigationComponent, HighlightJsDirective, RouterLink],
	templateUrl: "./theory-base-navigation.component.html",
	styleUrl: "./theory-base-navigation.component.scss",
})
export class TheoryBaseNavigationComponent {}
