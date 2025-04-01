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
];
