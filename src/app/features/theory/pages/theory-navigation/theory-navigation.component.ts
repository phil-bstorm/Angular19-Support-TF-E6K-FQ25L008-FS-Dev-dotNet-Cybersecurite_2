import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-navigation",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-navigation.component.html",
	styleUrl: "./theory-navigation.component.scss",
})
export class TheoryNavigationComponent {}
