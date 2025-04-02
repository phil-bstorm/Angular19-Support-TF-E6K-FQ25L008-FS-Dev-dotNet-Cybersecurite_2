import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-ng-content",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-ng-content.component.html",
	styleUrl: "./demo-ng-content.component.scss",
})
export class DemoNgContentComponent {}
