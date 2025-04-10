import {Component, inject} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {UserService} from "@app/features/demo/pages/demo-service-injection/services/user.service";

@Component({
	selector: "demo-guard",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-guard.component.html",
	styleUrl: "./demo-guard.component.scss",
})
export class DemoGuardComponent {}
