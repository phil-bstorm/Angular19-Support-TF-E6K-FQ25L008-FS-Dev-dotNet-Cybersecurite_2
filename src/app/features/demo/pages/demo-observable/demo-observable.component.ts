import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-observable",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-observable.component.html",
	styleUrl: "./demo-observable.component.scss",
})
export class DemoObservableComponent {}
