import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-interceptor",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-interceptor.component.html",
	styleUrl: "./theory-interceptor.component.scss",
})
export class TheoryInterceptorComponent {}
