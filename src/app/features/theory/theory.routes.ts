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
	{
		path: CoursesInstance.getChapterId(ChapterName.Binding).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-binding/theory-binding.component"
			).then(c => c.TheoryBindingComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Signal).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-signal/theory-signal.component"
			).then(c => c.TheorySignalComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.CycleDeVie).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-cycle-de-vie/theory-cycle-de-vie.component"
			).then(c => c.TheoryCycleDeVieComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Pipe).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-pipe/theory-pipe.component"
			).then(c => c.TheoryPipeComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Directive).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-directive/theory-directive.component"
			).then(c => c.TheoryDirectiveComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.NgTemplate).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-ng-template/theory-ng-template.component"
			).then(c => c.TheoryNgTemplateComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.InputOutput).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-input-output/theory-input-output.component"
			).then(c => c.TheoryInputOutputComponent),
	},
	{
		path: CoursesInstance.getChapterId(
			ChapterName.ServiceInjection,
		).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-service-injection/theory-service-injection.component"
			).then(c => c.TheoryServiceInjectionComponent),
	},
	{
		path: CoursesInstance.getChapterId(ChapterName.Formulaire).toString(),
		loadComponent: () =>
			import(
				"@app/features/theory/pages/theory-formulaire/theory-formulaire.component"
			).then(c => c.TheoryFormulaireComponent),
	},
];
