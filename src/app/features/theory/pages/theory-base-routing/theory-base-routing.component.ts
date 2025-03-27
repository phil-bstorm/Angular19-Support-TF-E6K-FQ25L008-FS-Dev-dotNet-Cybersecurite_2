import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "demo-base-routing-navigation",
	imports: [HighlightJsDirective, TheoryHeaderComponent],
	templateUrl: "./theory-base-routing.component.html",
	styleUrl: "./theory-base-routing.component.scss",
})
export class TheoryBaseRoutingComponent {}
