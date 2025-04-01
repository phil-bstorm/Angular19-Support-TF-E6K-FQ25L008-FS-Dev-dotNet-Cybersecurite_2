import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-interceptor",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-interceptor.component.html",
	styleUrl: "./demo-interceptor.component.scss",
})
export class DemoInterceptorComponent {}
