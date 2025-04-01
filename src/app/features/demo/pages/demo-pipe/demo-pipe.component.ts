import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {DemoIntegratedPipesComponent} from "@app/features/demo/pages/demo-pipe/demo-integrated-pipes/demo-integrated-pipes.component";
import {DemoCustomPipeComponent} from "@app/features/demo/pages/demo-pipe/demo-custom-pipe/demo-custom-pipe.component";

@Component({
	selector: "demo-pipe",
	imports: [
		DemoHeaderComponent,
		DemoIntegratedPipesComponent,
		DemoCustomPipeComponent,
	],
	templateUrl: "./demo-pipe.component.html",
	styleUrl: "./demo-pipe.component.scss",
})
export class DemoPipeComponent {}
