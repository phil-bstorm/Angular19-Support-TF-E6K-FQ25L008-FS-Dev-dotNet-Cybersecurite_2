import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-pipe",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-pipe.component.html",
	styleUrl: "./theory-pipe.component.scss",
})
export class TheoryPipeComponent {}
