import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-guard",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-guard.component.html",
	styleUrl: "./theory-guard.component.scss",
})
export class TheoryGuardComponent {}
