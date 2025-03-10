import {Routes} from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./demo-base-routing-navigation.component").then(
				m => m.DemoBaseRoutingNavigationComponent,
			),
	},
	{
		path: "book",
		loadChildren: () => import("./book/book.routes").then(r => r.routes),
	},
];
