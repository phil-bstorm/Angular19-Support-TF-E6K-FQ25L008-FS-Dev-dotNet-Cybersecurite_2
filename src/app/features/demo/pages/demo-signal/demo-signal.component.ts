import {
	Component,
	computed,
	effect,
	EffectRef,
	OnDestroy,
	OnInit,
	Signal,
	signal,
	WritableSignal,
} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-signal",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-signal.component.html",
	styleUrl: "./demo-signal.component.scss",
})
export class DemoSignalComponent implements OnInit, OnDestroy {
	count = signal(2);

	doubleCount: Signal<number> = computed(() => this.count() * 2);

	showCount = signal(false);

	conditionalCount = computed(() => {
		if (this.showCount()) {
			return `Le compteur est à ${this.count()}.`;
		} else {
			return "Rien à afficher !";
		}
	});

	effectRef: EffectRef | null = null; // référence à l'effet

	constructor() {
		this.effectRef = effect(() => {
			console.log("Effet : ");
			console.log("Compteur : ", this.count());
			console.log("Double compteur : ", this.doubleCount());
		});
	}

	ngOnInit() {
		this.count.set(5);
	}

	increment() {
		this.count.update(c => c + 1);
	}

	ngOnDestroy() {
		this.effectRef?.destroy();
	}
}
