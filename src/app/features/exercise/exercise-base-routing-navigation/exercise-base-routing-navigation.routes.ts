import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./exercise-base-routing-navigation.component").then(
				m => m.ExerciseBaseRoutingNavigationComponent,
			),
	},
];
