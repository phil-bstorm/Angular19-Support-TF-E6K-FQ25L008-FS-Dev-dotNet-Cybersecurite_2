import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-observable",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-observable.component.html",
	styleUrl: "./theory-observable.component.scss",
})
export class TheoryObservableComponent {}
