import {Routes} from "@angular/router";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const routes: Routes = [
	{
		path: CoursesInstance.getChapterId(ChapterName.Composant).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-composant/demo-composant.component"
			).then(c => c.DemoComposantComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.BaseNavigation,
		).toString(),
		loadChildren: () =>
			import(
				"@app/features/demo/pages/demo-base-routing-navigation/demo-base-routing-navigation.routes"
			).then(r => r.routes),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Binding).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-bindings/demo-bindings.component"
			).then(c => c.DemoBindingsComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Signal).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-signal/demo-signal.component"
			).then(c => c.DemoSignalComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.CycleDeVie).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-cycle-de-vie/demo-cycle-de-vie.component"
			).then(c => c.DemoCycleDeVieComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Pipe).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-pipe/demo-pipe.component"
			).then(c => c.DemoPipeComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Directive).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-directive/demo-directive.component"
			).then(c => c.DemoDirectiveComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.NgTemplate).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-ng-template/demo-ng-template.component"
			).then(c => c.DemoNgTemplateComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.InputOutput).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-input-output/demo-input-output.component"
			).then(c => c.DemoInputOutputComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.ServiceInjection,
		).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-service-injection/demo-service-injection.component"
			).then(c => c.DemoServiceInjectionComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Formulaire).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-formulaire/demo-formulaire.component"
			).then(c => c.DemoFormulaireComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Routing).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-routing/demo-routing.component"
			).then(c => c.DemoRoutingComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Navigation).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-navigation/demo-navigation.component"
			).then(c => c.DemoNavigationComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Guard).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-guard/demo-guard.component"
			).then(c => c.DemoGuardComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Storage).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-storage/demo-storage.component"
			).then(c => c.DemoStorageComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Observable).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-observable/demo-observable.component"
			).then(c => c.DemoObservableComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.HttpClient).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-http-client/demo-http-client.component"
			).then(c => c.DemoHttpClientComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Interceptor).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-interceptor/demo-interceptor.component"
			).then(c => c.DemoInterceptorComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Resolver).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-resolver/demo-resolver.component"
			).then(c => c.DemoResolverComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.NgContent).toString(),
		loadComponent: () =>
			import(
				"@app/features/demo/pages/demo-ng-content/demo-ng-content.component"
			).then(c => c.DemoNgContentComponent),
	},
];
