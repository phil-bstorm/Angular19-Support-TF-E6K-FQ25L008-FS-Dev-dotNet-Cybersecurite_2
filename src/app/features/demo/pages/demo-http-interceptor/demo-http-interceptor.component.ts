import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-http-interceptor",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-http-interceptor.component.html",
	styleUrl: "./demo-http-interceptor.component.scss",
})
export class DemoHttpInterceptorComponent {}
