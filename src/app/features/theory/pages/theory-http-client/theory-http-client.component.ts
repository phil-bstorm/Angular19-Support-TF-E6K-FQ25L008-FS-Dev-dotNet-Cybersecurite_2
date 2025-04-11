import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-http-client",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-http-client.component.html",
	styleUrl: "./theory-http-client.component.scss",
})
export class TheoryHttpClientComponent {}
