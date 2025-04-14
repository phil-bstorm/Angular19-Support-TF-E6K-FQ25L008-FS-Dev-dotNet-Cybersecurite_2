import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {HighlightJsDirective} from "ngx-highlight-js";

@Component({
	selector: "theory-storage",
	imports: [TheoryHeaderComponent, HighlightJsDirective],
	templateUrl: "./theory-storage.component.html",
	styleUrl: "./theory-storage.component.scss",
})
export class TheoryStorageComponent {}
