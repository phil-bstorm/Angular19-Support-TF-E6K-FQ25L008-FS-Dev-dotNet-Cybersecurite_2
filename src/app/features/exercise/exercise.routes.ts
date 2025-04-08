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
	{
		path: CoursesInstance.getChapterId(ChapterName.Guard).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-guard/exercise-guard.component"
			).then(c => c.ExerciseGuardComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Storage).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-storage/exercise-storage.component"
			).then(c => c.ExerciseStorageComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Observable).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-observable/exercise-observable.component"
			).then(c => c.ExerciseObservableComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.HttpClient).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-http-client/exercise-http-client.component"
			).then(c => c.ExerciseHttpClientComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Interceptor).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-interceptor/exercise-interceptor.component"
			).then(c => c.ExerciseInterceptorComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Resolver).toString(),
		loadComponent: () =>
			import(
				"@app/features/exercise/pages/exercise-resolver/exercise-resolver.component"
			).then(c => c.ExerciseResolverComponent),
	},
];
