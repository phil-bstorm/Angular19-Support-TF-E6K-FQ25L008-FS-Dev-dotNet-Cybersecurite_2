import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-service-injection",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-service-injection.component.html",
	styleUrl: "./theory-service-injection.component.scss",
})
export class TheoryServiceInjectionComponent {}
