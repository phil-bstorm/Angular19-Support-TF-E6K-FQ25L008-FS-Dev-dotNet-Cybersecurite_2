import {Routes} from "@angular/router";
import { mdpCheckGuard } from "./guards/mdp-check.guard";

export const routes: Routes = [
	{
		path: "",
		loadComponent: () =>
			import("./exercise-guard.component").then(
				c => c.ExerciseGuardComponent,
			),
	},
	{
		path: "bon-mdp",
		canActivate : [mdpCheckGuard],
		loadComponent: () => import('./pages/bon-mdp/bon-mdp.component').then(c => c.BonMdpComponent)
	},
	{
		path: "mauvais-mdp",
		loadComponent: () => import('./pages/mauvais-mdp/mauvais-mdp.component').then(c => c.MauvaisMdpComponent)
	},
];
