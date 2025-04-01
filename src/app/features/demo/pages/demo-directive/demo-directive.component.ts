import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-directive",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-directive.component.html",
	styleUrl: "./demo-directive.component.scss",
})
export class DemoDirectiveComponent {}
