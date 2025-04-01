import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-composant/exercise-composant.component"
			).then(c => c.ExerciseComposantComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadChildren: () =>
			import(
				"./pages/exercise-base-routing-navigation/exercise-base-routing-navigation.routes"
			).then(r => r.routes),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Binding).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-bindings/exercise-bindings.component"
			).then(c => c.ExerciseBindingsComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Signal).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-signal/exercise-signal.component"
			).then(c => c.ExerciseSignalComponent),
	},
];
