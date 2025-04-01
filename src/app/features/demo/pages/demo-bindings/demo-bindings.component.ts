import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {DemoInterpolationBindingComponent} from "@app/features/demo/pages/demo-bindings/demo-interpolation-binding/demo-interpolation-binding.component";
import {DemoPropertyBindingComponent} from "@app/features/demo/pages/demo-bindings/demo-property-binding/demo-property-binding.component";
import {DemoEventBindingComponent} from "@app/features/demo/pages/demo-bindings/demo-event-binding/demo-event-binding.component";
import {DemoTwoWayBindingComponent} from "@app/features/demo/pages/demo-bindings/demo-two-way-binding/demo-two-way-binding.component";

@Component({
	selector: "demo-bindings",
	imports: [
		DemoHeaderComponent,
		DemoInterpolationBindingComponent,
		DemoPropertyBindingComponent,
		DemoEventBindingComponent,
		DemoTwoWayBindingComponent,
	],
	templateUrl: "./demo-bindings.component.html",
	styleUrl: "./demo-bindings.component.scss",
})
export class DemoBindingsComponent {}
