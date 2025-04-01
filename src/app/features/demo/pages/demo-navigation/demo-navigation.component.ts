import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-navigation",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-navigation.component.html",
	styleUrl: "./demo-navigation.component.scss",
})
export class DemoNavigationComponent {}
