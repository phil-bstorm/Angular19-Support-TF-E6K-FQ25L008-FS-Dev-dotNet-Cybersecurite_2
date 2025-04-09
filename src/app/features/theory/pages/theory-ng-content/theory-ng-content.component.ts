import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-ng-content",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-ng-content.component.html",
	styleUrl: "./theory-ng-content.component.scss",
})
export class TheoryNgContentComponent {}
