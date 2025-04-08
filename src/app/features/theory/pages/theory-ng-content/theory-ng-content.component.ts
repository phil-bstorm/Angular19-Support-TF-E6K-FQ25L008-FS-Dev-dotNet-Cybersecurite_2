import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";
import {DemoEnfantDefaultNgContentComponent} from "@app/features/demo/pages/demo-ng-content/components/demo-enfant-default-ng-content/demo-enfant-default-ng-content.component";

@Component({
	selector: "theory-ng-content",
	imports: [
		TheoryHeaderComponent,
		HighlightJsDirective,
		DemoEnfantDefaultNgContentComponent,
	],
	templateUrl: "./theory-ng-content.component.html",
	styleUrl: "./theory-ng-content.component.scss",
})
export class TheoryNgContentComponent {}
