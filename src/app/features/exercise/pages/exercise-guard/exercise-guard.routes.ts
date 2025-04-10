import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./exercise-guard.component").then(
				c => c.ExerciseGuardComponent,
			),
	},
];
