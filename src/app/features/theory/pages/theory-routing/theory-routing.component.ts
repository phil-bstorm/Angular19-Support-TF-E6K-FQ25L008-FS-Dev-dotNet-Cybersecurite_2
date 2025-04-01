import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-routing",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-routing.component.html",
	styleUrl: "./theory-routing.component.scss",
})
export class TheoryRoutingComponent {}
