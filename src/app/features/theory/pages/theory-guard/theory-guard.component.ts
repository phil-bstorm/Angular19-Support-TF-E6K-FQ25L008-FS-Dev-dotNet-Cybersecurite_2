import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-guard",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-guard.component.html",
	styleUrl: "./theory-guard.component.scss",
})
export class TheoryGuardComponent {}
