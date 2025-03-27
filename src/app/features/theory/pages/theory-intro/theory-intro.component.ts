import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-intro",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-intro.component.html",
	styleUrl: "./theory-intro.component.scss",
})
export class TheoryIntroComponent {}
