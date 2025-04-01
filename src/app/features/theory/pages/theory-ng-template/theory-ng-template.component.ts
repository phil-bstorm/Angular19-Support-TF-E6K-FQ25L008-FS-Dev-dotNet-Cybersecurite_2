import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-ng-template",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-ng-template.component.html",
	styleUrl: "./theory-ng-template.component.scss",
})
export class TheoryNgTemplateComponent {}
