import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-http-client",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-http-client.component.html",
	styleUrl: "./demo-http-client.component.scss",
})
export class DemoHttpClientComponent {}
