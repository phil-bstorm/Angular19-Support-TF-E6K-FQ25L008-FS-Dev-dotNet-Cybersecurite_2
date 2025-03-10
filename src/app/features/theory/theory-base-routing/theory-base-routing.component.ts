import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "demo-base-routing-navigation",
	imports: [ChapterNavigationComponent, HighlightJsDirective],
	templateUrl: "./theory-base-routing.component.html",
	styleUrl: "./theory-base-routing.component.scss",
})
export class TheoryBaseRoutingComponent {}
