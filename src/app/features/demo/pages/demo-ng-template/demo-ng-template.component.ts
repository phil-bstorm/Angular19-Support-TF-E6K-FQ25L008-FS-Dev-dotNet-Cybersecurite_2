import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-ng-template",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-ng-template.component.html",
	styleUrl: "./demo-ng-template.component.scss",
})
export class DemoNgTemplateComponent {}
