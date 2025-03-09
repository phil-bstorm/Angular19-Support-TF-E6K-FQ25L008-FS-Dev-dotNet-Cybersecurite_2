import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/componenents/chapter-navigation/chapter-navigation.component";

@Component({
	selector: "theory-intro",
	imports: [ChapterNavigationComponent],
	templateUrl: "./theory-intro.component.html",
	styleUrl: "./theory-intro.component.scss",
})
export class TheoryIntroComponent {}
