import {Component, effect, inject, OnInit} from "@angular/core";
import {ChapterNavigationService} from "@shared/components/chapter-navigation/services/chapter-navigation.service";
import {NgClass} from "@angular/common";
import {ChapterTDE, CoursesInstance} from "@core/constants/chapters.constants";
import {RouterLink} from "@angular/router";
import {
	NAV_DEMO,
	NAV_EXERCISE,
	NAV_THEORY,
} from "@core/constants/navigation.constants";

@Component({
	selector: "chapter-navigation",
	imports: [NgClass, RouterLink],
	templateUrl: "./chapter-navigation.component.html",
	styleUrl: "./chapter-navigation.component.scss",
})
export class ChapterNavigationComponent {
	protected readonly ChapterTDE = ChapterTDE;

	private readonly _chapterNav: ChapterNavigationService = inject(
		ChapterNavigationService,
	);

	/* current chapter */
	currentIndex = this._chapterNav.currentIndex;
	currentCategory = this._chapterNav.currentCategory;
	hasTheory = false;
	hasDemo = false;
	hasExercise = false;

	/* previous chapter */
	previousChapter = this._chapterNav.previousChapter;
	previousChapterName = this._chapterNav.previousChapterName;

	/* next chapter */
	nextChapter = this._chapterNav.nextChapter;
	nextChapterName = this._chapterNav.nextChapterName;

	constructor() {
		let currIndex = this._chapterNav.currentIndex();
		if (currIndex != null) {
			this.hasTheory = CoursesInstance.doesChapterIdHas(currIndex, [
				ChapterTDE.theory,
			]);
			this.hasDemo = CoursesInstance.doesChapterIdHas(currIndex, [
				ChapterTDE.demo,
			]);
			this.hasExercise = CoursesInstance.doesChapterIdHas(currIndex, [
				ChapterTDE.exercise,
			]);
		}
	}

	protected readonly NAV_THEORY = NAV_THEORY;
	protected readonly NAV_DEMO = NAV_DEMO;
	protected readonly NAV_EXERCISE = NAV_EXERCISE;
}
