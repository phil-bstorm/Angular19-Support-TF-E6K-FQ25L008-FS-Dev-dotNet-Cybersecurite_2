import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./pages/index/index.component").then(c => c.IndexComponent),
	},
	{
		path: "create",
		loadComponent: () =>
			import("./pages/create/create.component").then(
				c => c.CreateComponent,
			),
	},
];
