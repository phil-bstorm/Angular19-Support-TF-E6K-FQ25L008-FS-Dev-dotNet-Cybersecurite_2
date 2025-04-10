export enum ChapterTDE {
	theory = "theory",
	demo = "demo",
	exercise = "exercise",
}

export interface Chapter {
	name: string;
	has: ChapterTDE[];
}

export enum ChapterName {
	Intro = "Intro",
	Infrastructure = "Infrastructure",
	Composant = "Composant",
	CycleDeVie = "Cycle de vie",
	BaseRouting = "Base Routing",
	BaseNavigation = "Base Navigation",
	Binding = "Binding",
	Pipe = "Pipe",
	Directive = "Directive",
	NgTemplate = "NgTemplate",
	InputOutput = "Input & Output",
	NgContent = "NgContent",
	ServiceInjection = "Service & Injection",
	Formulaire = "Formulaire",
	RouterOutlet = "RouterOutlet",
	Navigation = "Navigation",
	Guard = "Guard",
	Resolver = "Resolver",
	Storage = "Storage",
	Observable = "Observable",
	HttpClient = "HttpClient",
	Interceptor = "Interceptor",
	Signal = "Signal",
}

export class Courses {
	chapterOrder: Chapter[] = [
		{
			name: ChapterName.Intro,
			has: [ChapterTDE.theory],
		},
		{
			name: ChapterName.Infrastructure,
			has: [ChapterTDE.theory],
		},
		{
			name: ChapterName.Composant,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.BaseRouting,
			has: [ChapterTDE.theory],
		},
		{
			name: ChapterName.BaseNavigation,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Binding,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.CycleDeVie,
			has: [ChapterTDE.theory, ChapterTDE.demo],
		},
		{
			name: ChapterName.Pipe,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Directive,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.NgTemplate,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.InputOutput,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.NgContent,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.ServiceInjection,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Formulaire,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Navigation,
			has: [ChapterTDE.theory, ChapterTDE.demo],
		},
		{
			name: ChapterName.Guard,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Storage,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Observable,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.HttpClient,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Interceptor,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Signal,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Resolver,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.RouterOutlet,
			has: [ChapterTDE.theory, ChapterTDE.demo],
		},
	];

	getChapterId = (name: ChapterName) => {
		return this.chapterOrder.findIndex(chapter => chapter.name === name);
	};

	doesChapterIdHas = (chapterId: number, tdes: ChapterTDE[]) => {
		return tdes.every(tde =>
			this.chapterOrder[chapterId].has.includes(tde),
		);
	};
}

export const CoursesInstance = new Courses();
