import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {FormsModule} from "@angular/forms";
import {NgClass, NgStyle} from "@angular/common";
import {HighlightDirectiveDirective} from "@app/features/demo/pages/demo-directive/directives/highlight-directive.directive";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "demo-directive",
	imports: [
		DemoHeaderComponent,
		FormsModule,
		NgClass,
		NgStyle,
		HighlightDirectiveDirective,
		HighlightJsDirective,
	],
	templateUrl: "./demo-directive.component.html",
	styleUrl: "./demo-directive.component.scss",
})
export class DemoDirectiveComponent {
	shallPass: boolean = false;
	items: string[] = ["Apple", "Banana", "Cherry"];
	color: string = "black";
	replique: string = "";
}
