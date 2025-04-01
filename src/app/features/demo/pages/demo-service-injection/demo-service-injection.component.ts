import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-service-injection",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-service-injection.component.html",
	styleUrl: "./demo-service-injection.component.scss",
})
export class DemoServiceInjectionComponent {}
