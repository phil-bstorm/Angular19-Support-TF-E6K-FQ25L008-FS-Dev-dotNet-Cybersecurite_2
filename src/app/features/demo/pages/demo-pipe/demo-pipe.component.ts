import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-pipe",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-pipe.component.html",
	styleUrl: "./demo-pipe.component.scss",
})
export class DemoPipeComponent {}
