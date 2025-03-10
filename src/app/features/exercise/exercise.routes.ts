import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import("./exercise-composant/exercise-composant.component").then(
				c => c.ExerciseComposantComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadChildren: () =>
			import(
				"./exercise-base-routing-navigation/exercise-base-routing-navigation.routes"
			).then(r => r.routes),
	},
];
