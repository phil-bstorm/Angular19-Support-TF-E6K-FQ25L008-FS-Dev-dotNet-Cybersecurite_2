import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-signal",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-signal.component.html",
	styleUrl: "./demo-signal.component.scss",
})
export class DemoSignalComponent {}
