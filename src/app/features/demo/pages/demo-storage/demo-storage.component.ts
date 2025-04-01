import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-storage",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-storage.component.html",
	styleUrl: "./demo-storage.component.scss",
})
export class DemoStorageComponent {}
