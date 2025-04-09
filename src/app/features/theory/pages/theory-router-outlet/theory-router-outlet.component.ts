import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-router-outlet",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-router-outlet.component.html",
	styleUrl: "./theory-router-outlet.component.scss",
})
export class TheoryRouterOutletComponent {}
