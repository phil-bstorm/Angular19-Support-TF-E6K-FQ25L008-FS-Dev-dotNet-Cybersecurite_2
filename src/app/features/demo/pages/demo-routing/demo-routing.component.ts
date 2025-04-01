import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-routing",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-routing.component.html",
	styleUrl: "./demo-routing.component.scss",
})
export class DemoRoutingComponent {}
