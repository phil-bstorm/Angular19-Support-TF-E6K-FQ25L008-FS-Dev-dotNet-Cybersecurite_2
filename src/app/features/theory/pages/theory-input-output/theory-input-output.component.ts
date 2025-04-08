import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-input-output",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-input-output.component.html",
	styleUrl: "./theory-input-output.component.scss",
})
export class TheoryInputOutputComponent {}
