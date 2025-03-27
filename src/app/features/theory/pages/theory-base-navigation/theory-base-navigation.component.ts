import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {RouterLink} from "@angular/router";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-base-navigation",
	imports: [HighlightJsDirective, RouterLink, TheoryHeaderComponent],
	templateUrl: "./theory-base-navigation.component.html",
	styleUrl: "./theory-base-navigation.component.scss",
})
export class TheoryBaseNavigationComponent {}
