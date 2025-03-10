import {Component} from "@angular/core";
import {ChapterNavigationComponent} from "@shared/components/chapter-navigation/chapter-navigation.component";
import {HighlightJsDirective} from "ngx-highlight-js";
import {HelloWorldComponent} from "@app/features/demo/demo-composant/hello-world/hello-world.component";

@Component({
	selector: "demo-composant",
	imports: [
		ChapterNavigationComponent,
		HighlightJsDirective,
		HelloWorldComponent,
	],
	templateUrl: "./demo-composant.component.html",
	styleUrl: "./demo-composant.component.scss",
})
export class DemoComposantComponent {
	imgUrlPremierComposant: string =
		"assets/demo/composant/premier-composant.png";
}
