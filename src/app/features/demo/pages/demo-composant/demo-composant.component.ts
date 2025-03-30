import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {HelloWorldComponent} from "@app/features/demo/pages/demo-composant/hello-world/hello-world.component";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-composant",
	imports: [HighlightJsDirective, HelloWorldComponent, DemoHeaderComponent],
	templateUrl: "./demo-composant.component.html",
	styleUrl: "./demo-composant.component.scss",
})
export class DemoComposantComponent {
	imgUrlPremierComposant: string =
		"assets/demo/composant/premier-composant.png";
}
