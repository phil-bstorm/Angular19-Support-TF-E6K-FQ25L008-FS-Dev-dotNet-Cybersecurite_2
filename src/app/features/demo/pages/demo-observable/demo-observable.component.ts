import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {ClockService} from "@app/features/demo/pages/demo-observable/services/clock.service";
import {DatePipe} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
	selector: "demo-observable",
	imports: [DemoHeaderComponent, DatePipe],
	templateUrl: "./demo-observable.component.html",
	styleUrl: "./demo-observable.component.scss",
})
export class DemoObservableComponent implements OnInit, OnDestroy {
	private readonly _clockService = inject(ClockService);

	clockSubscription: Subscription | null = null;
	currentDate = new Date();

	ngOnInit(): void {
		this.clockSubscription = this._clockService.getClock().subscribe({
			next: (date: Date) => {
				console.log("Valeur reçue :", date);
				this.currentDate = date;
			},
		});
	}

	ngOnDestroy() {
		if (this.clockSubscription) {
			this.clockSubscription.unsubscribe();
		}
	}
}
