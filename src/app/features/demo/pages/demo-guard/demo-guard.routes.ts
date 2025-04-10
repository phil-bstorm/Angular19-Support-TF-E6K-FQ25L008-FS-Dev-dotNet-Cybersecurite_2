import {Routes} from "@angular/router";
import {isConnectedGuard} from "@app/features/demo/pages/demo-guard/guards/is-connected.guard";

export const routes: Routes = [
	{
		path: "",
		canActivate: [isConnectedGuard],
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-guard/demo-guard.component"
			).then(c => c.DemoGuardComponent),
	},
];
