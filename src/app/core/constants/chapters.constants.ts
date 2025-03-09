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
	Navigation = "Navigation",
	Binding = "Binding",
	Pipe = "Pipe",
	Directive = "Directive",
	InputOutput = "Input & Output",
	ServiceInjection = "Service & Injection",
	Formulaire = "Formulaire",
	Routing = "Routing",
	GuardResolver = "Guard & Resolver",
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
			name: ChapterName.Composant,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.CycleDeVie,
			has: [ChapterTDE.theory, ChapterTDE.demo],
		},
		{
			name: ChapterName.BaseRouting,
			has: [ChapterTDE.theory],
		},
		{
			name: ChapterName.Navigation,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Infrastructure,
			has: [ChapterTDE.theory],
		},
		{
			name: ChapterName.Binding,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.Signal,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
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
			name: ChapterName.InputOutput,
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
			name: ChapterName.Routing,
			has: [ChapterTDE.theory, ChapterTDE.demo, ChapterTDE.exercise],
		},
		{
			name: ChapterName.GuardResolver,
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
