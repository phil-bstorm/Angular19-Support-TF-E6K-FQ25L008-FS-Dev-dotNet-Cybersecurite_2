import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-http-interceptor",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-http-interceptor.component.html",
	styleUrl: "./theory-http-interceptor.component.scss",
})
export class TheoryHttpInterceptorComponent {}
