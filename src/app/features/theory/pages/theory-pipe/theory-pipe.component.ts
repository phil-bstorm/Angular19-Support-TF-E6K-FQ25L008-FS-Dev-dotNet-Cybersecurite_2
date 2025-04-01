import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {DatePipe} from "@angular/common";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-pipe",
	imports: [TheoryHeaderComponent, DatePipe, HighlightJsDirective],
	templateUrl: "./theory-pipe.component.html",
	styleUrl: "./theory-pipe.component.scss",
})
export class TheoryPipeComponent {
	maVariableDate: Date = new Date("2024-03-04");
}
