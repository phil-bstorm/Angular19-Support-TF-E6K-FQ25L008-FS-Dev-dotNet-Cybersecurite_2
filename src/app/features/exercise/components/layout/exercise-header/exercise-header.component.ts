import {Component, input, signal} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {GoTopComponent} from "@shared/components/go-top/go-top.component";

@Component({
	selector: "exercise-header",
	imports: [ChapterNavigationComponent, GoTopComponent],
	templateUrl: "./exercise-header.component.html",
	styleUrl: "./exercise-header.component.scss",
})
export class ExerciseHeaderComponent {
	chapterName = input.required<string>();
}
