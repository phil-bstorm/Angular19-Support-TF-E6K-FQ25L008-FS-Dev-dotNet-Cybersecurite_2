import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Intro).toString(),
		loadComponent: () =>
			import("./theory-intro/theory-intro.component").then(
				c => c.TheoryIntroComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import("./theory-composant/theory-composant.component").then(
				c => c.TheoryComposantComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.BaseRouting).toString(),
		loadComponent: () =>
			import("./theory-base-routing/theory-base-routing.component").then(
				c => c.TheoryBaseRoutingComponent,
			),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadComponent: () =>
			import(
				"./theory-base-navigation/theory-base-navigation.component"
			).then(c => c.TheoryBaseNavigationComponent),
	},
];
