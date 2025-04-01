import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";

@Component({
	selector: "theory-cycle-de-vie",
	imports: [TheoryHeaderComponent],
	templateUrl: "./theory-cycle-de-vie.component.html",
	styleUrl: "./theory-cycle-de-vie.component.scss",
})
export class TheoryCycleDeVieComponent {
	imageUrlngOnChanges = "assets/theory/cycle-de-vie/ngOnChanges.png";
	imageUrlngOnInit = "assets/theory/cycle-de-vie/ngOnInit.png";
	imageUrlngDoCheck = "assets/theory/cycle-de-vie/ngDoCheck.png";
	imageUrlngAfterContentInit =
		"assets/theory/cycle-de-vie/ngAfterContentInit.png";
	imageUrlngAfterContentChecked =
		"assets/theory/cycle-de-vie/ngAfterContentChecked.png";
	imageUrlngOnDestroy = "assets/theory/cycle-de-vie/ngOnDestroy.png";
}
