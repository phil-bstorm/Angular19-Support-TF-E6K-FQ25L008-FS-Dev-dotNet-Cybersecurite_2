import {inject, Injectable, signal} from "@angular/core";
import {
	Chapter,
	ChapterTDE,
	CoursesInstance,
} from "@core/constants/chapters.constants";
import {Router} from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class ChapterNavigationService {
	private _router: Router = inject(Router);

	currentCategory = signal<ChapterTDE | null>(null);
	currentIndex = signal<number | null>(null);
	currentChapterName = signal<string | null>(null);

	previousChapter = signal<number | null>(null);
	previousChapterName = signal<string | null>(null);
	nextChapter = signal<number | null>(null);
	nextChapterName = signal<string | null>(null);

	constructor() {
		this.checkPage();
		this._router.events.subscribe(() => {
			this.checkPage();
		});
	}

	checkPage() {
		const url = this._router.url.split("/");
		const category: string = url[1];

		if (category in ChapterTDE) {
			this.currentCategory.set(
				ChapterTDE[category as keyof typeof ChapterTDE],
			);

			url[2] = url[2].split("?")[0]; // remove query params

			const currIndex = Number(url[2]);
			this.currentIndex.set(currIndex);

			if (currIndex != null) {
				this.currentChapterName.set(
					CoursesInstance.chapterOrder[currIndex].name || null,
				);

				const prevChap = this.checkPreviousChapter();
				this.previousChapter.set(
					prevChap?.index != null ? prevChap.index : null,
				);
				this.previousChapterName.set(prevChap?.chap.name || null);

				const nextChap = this.checkNextChapter();
				this.nextChapter.set(nextChap?.index || null);
				this.nextChapterName.set(nextChap?.chap.name || null);
			}
		}
	}

	private checkPreviousChapter(): {chap: Chapter; index: number} | null {
		const currCategory = this.currentCategory();
		const currIndex = this.currentIndex();

		// if we don't have a current category or index, we can't determine if there is a previous chapter
		if (currCategory == null || currIndex == null) {
			return null;
		}

		// if we are at the first chapter, there is no previous chapter
		let found: Chapter | null = null;
		let foundIndex: number | null = null;
		for (let i = currIndex - 1; i >= 0 && found == null; i--) {
			if (CoursesInstance.chapterOrder[i].has.includes(currCategory)) {
				found = CoursesInstance.chapterOrder[i];
				foundIndex = i;
			}
		}

		if (found !== null && foundIndex !== null) {
			return {
				chap: found,
				index: foundIndex,
			};
		}
		return null;
	}

	private checkNextChapter(): {chap: Chapter; index: number} | null {
		const currCategory = this.currentCategory();
		const currIndex = this.currentIndex();

		// if we don't have a current category or index, we can't determine if there is a next chapter
		if (currCategory == null || currIndex == null) {
			return null;
		}

		// if we are at the last chapter, there is no next chapter
		let found: Chapter | null = null;
		let foundIndex: number | null = null;
		for (
			let i = currIndex + 1;
			i < CoursesInstance.chapterOrder.length && found == null;
			i++
		) {
			if (CoursesInstance.chapterOrder[i].has.includes(currCategory)) {
				found = CoursesInstance.chapterOrder[i];
				foundIndex = i;
			}
		}

		if (found !== null && foundIndex !== null) {
			return {
				chap: found,
				index: foundIndex,
			};
		}
		return null;
	}
}
