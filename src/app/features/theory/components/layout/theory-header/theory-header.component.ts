import {Component, input, signal} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {GoTopComponent} from "@shared/components/go-top/go-top.component";

@Component({
	selector: "theory-header",
	imports: [ChapterNavigationComponent, GoTopComponent],
	templateUrl: "./theory-header.component.html",
	styleUrl: "./theory-header.component.scss",
})
export class TheoryHeaderComponent {
	chapterName = input.required<string>();
}
