import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-resolver",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-resolver.component.html",
	styleUrl: "./demo-resolver.component.scss",
})
export class DemoResolverComponent {}
