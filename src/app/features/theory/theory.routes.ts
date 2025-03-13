import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Intro).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-intro/theory-intro.component"
			).then(c => c.TheoryIntroComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-composant/theory-composant.component"
			).then(c => c.TheoryComposantComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.BaseRouting).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-base-routing/theory-base-routing.component"
			).then(c => c.TheoryBaseRoutingComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-base-navigation/theory-base-navigation.component"
			).then(c => c.TheoryBaseNavigationComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.Infrastructure,
		).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-infrastructure/theory-infrastructure.component"
			).then(c => c.TheoryInfrastructureComponent),
	},
];
