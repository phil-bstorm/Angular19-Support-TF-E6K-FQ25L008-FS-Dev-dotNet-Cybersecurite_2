import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-router-outlet",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-router-outlet.component.html",
	styleUrl: "./demo-router-outlet.component.scss",
})
export class DemoRouterOutletComponent {}
