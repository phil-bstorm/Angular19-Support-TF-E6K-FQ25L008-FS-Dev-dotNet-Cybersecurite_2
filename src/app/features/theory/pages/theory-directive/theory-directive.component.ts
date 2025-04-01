import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";
import {NgClass} from "@angular/common";

@Component({
	selector: "theory-directive",
	imports: [TheoryHeaderComponent, HighlightJsDirective, NgClass],
	templateUrl: "./theory-directive.component.html",
	styleUrl: "./theory-directive.component.scss",
})
export class TheoryDirectiveComponent {
	// @if
	isVisible: boolean = false;
	// @for
	items: string[] = ["Apple", "Banana", "Cherry"];
	// ngClass
	isDanger: boolean = false;
}
