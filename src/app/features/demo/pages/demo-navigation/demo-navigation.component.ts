import {Component, inject, OnInit} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: "demo-navigation",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-navigation.component.html",
	styleUrl: "./demo-navigation.component.scss",
})
export class DemoNavigationComponent implements OnInit {
	private readonly _router = inject(Router);
	private readonly activatedRoute = inject(ActivatedRoute);

	constructor() {
		console.log("DemoNavigationComponent constructor");
	}

	sub: Subscription | null = null;

	ngOnInit() {
		console.log("DemoNavigationComponent ngOnInit");
		// Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
		this.sub = this._router.events.subscribe({
			next: event => {
				console.log(event);
			},
		});
	}

	ngOnDestroy() {
		console.log("DemoNavigationComponent ngOnDestroy");
		this.sub?.unsubscribe();
	}

	onRedirectToTheory() {
		this._router.navigate(["/", "theory", "14"]);
	}

	onButtonClick(text: string) {
		this._router.navigate(["/", "demo", "14", text]);
	}
}
