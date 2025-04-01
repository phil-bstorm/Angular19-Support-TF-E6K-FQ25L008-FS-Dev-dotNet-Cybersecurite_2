import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-directive",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-directive.component.html",
	styleUrl: "./theory-directive.component.scss",
})
export class TheoryDirectiveComponent {}
