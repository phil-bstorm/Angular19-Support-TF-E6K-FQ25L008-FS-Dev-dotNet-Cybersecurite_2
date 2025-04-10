import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
	selector: "demo-navigation",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-navigation.component.html",
	styleUrl: "./demo-navigation.component.scss",
})
export class DemoNavigationComponent implements OnInit, OnDestroy {
	private readonly _router = inject(Router);
	private readonly _activatedRoute = inject(ActivatedRoute);

	valueFromRoute: string | null = null;

	subscriptions: Subscription[] = [];

	ngOnInit() {
		this.subscriptions.push(
			this._activatedRoute.params.subscribe({
				next: params => {
					this.valueFromRoute = params["text"];
				},
			}),
		);

		this.subscriptions.push(
			this._activatedRoute.queryParams.subscribe({
				next: params => {
					const str = JSON.stringify(params);
					if (str.length > 2) {
						// plus grand que 2 car "{}" est le minimum
						this.valueFromRoute = JSON.stringify(params);
					}
				},
			}),
		);

		this.subscriptions.push(
			this._router.events.subscribe({
				next: event => {
					console.log(event);
				},
			}),
		);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(sub => sub.unsubscribe());
	}

	onRedirectToTheory() {
		this._router.navigate(["/", "theory", "14"]);
	}

	onButtonNavigationParam(text: string) {
		const path = ["/", "demo", "14"];
		if (text) {
			path.push(text);
		}

		this._router.navigate(path);
	}

	onButtonQueryParam() {
		this._router.navigate(["/", "demo", "14"], {
			queryParams: {author: "J. K. Rowling", hello: "world"},
		});
	}
}
