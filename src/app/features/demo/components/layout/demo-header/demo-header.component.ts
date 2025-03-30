import {Component, input} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {GoTopComponent} from "@shared/components/go-top/go-top.component";

@Component({
	selector: "demo-header",
	imports: [ChapterNavigationComponent, GoTopComponent],
	templateUrl: "./demo-header.component.html",
	styleUrl: "./demo-header.component.scss",
})
export class DemoHeaderComponent {
	chapterName = input.required<string>();
}
