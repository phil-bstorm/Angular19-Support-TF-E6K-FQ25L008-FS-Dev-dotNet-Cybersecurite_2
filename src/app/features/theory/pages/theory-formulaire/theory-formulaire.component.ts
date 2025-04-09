import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {NgStyle} from "@angular/common";
import {HighlightJsDirective} from "ngx-highlight-js";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
	selector: "theory-formulaire",
	imports: [
		TheoryHeaderComponent,
		NgStyle,
		HighlightJsDirective,
		ReactiveFormsModule,
	],
	templateUrl: "./theory-formulaire.component.html",
	styleUrl: "./theory-formulaire.component.scss",
})
export class TheoryFormulaireComponent {}
