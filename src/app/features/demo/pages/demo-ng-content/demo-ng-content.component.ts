import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {DemoEnfantNgContentComponent} from "@app/features/demo/pages/demo-ng-content/components/demo-enfant-ng-content/demo-enfant-ng-content.component";
import {DemoEnfantMultipleNgContentComponent} from "@app/features/demo/pages/demo-ng-content/components/demo-enfant-multiple-ng-content/demo-enfant-multiple-ng-content.component";
import {DemoEnfantDefaultNgContentComponent} from "@app/features/demo/pages/demo-ng-content/components/demo-enfant-default-ng-content/demo-enfant-default-ng-content.component";

@Component({
	selector: "demo-ng-content",
	imports: [
		DemoHeaderComponent,
		DemoEnfantNgContentComponent,
		DemoEnfantMultipleNgContentComponent,
		DemoEnfantDefaultNgContentComponent,
	],
	templateUrl: "./demo-ng-content.component.html",
	styleUrl: "./demo-ng-content.component.scss",
})
export class DemoNgContentComponent {}
