import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-guard",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-guard.component.html",
	styleUrl: "./demo-guard.component.scss",
})
export class DemoGuardComponent {}
