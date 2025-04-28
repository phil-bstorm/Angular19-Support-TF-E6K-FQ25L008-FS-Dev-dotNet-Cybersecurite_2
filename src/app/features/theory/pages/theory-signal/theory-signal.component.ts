import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-signal",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-signal.component.html",
	styleUrl: "./theory-signal.component.scss",
})
export class TheorySignalComponent {}
