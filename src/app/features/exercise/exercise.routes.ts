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
	{
		path: CoursesInstance.getChapterId(ChapterName.Pipe).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-pipe/exercise-pipe.component"
			).then(c => c.ExercisePipeComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Directive).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-directive/exercise-directive.component"
			).then(c => c.ExerciseDirectiveComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.NgTemplate).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-ng-template/exercise-ng-template.component"
			).then(c => c.ExerciseNgTemplateComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.InputOutput).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-input-output/exercise-input-output.component"
			).then(c => c.ExerciseInputOutputComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.ServiceInjection,
		).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-service-injection/exercise-service-injection.component"
			).then(c => c.ExerciseServiceInjectionComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Formulaire).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-formulaire/exercise-formulaire.component"
			).then(c => c.ExerciseFormulaireComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Routing).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-routing/exercise-routing.component"
			).then(c => c.ExerciseRoutingComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Navigation).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-navigation/exercise-navigation.component"
			).then(c => c.ExerciseNavigationComponent),
	},
];
