import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-navigation",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-navigation.component.html",
	styleUrl: "./theory-navigation.component.scss",
})
export class TheoryNavigationComponent {}
