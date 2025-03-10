import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import("./demo-composant/demo-composant.component").then(
				c => c.DemoComposantComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadChildren: () =>
			import(
				"@app/features/demo/demo-base-routing-navigation/demo-base-routing-navigation.routes"
			).then(r => r.routes),
	},
];
