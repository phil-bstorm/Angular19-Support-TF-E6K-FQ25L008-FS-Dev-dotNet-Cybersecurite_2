import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";

@Component({
	selector: "demo-event-binding",
	imports: [SpoilComponent],
	templateUrl: "./demo-event-binding.component.html",
	styleUrl: "./demo-event-binding.component.scss",
})
export class DemoEventBindingComponent {
	// exemple click
	handleClick() {
		alert("Button clicked!");
	}

	// exemple mouse over
	btnOverState: "info" | "warning" = "info"; // Note: "info" et "warning" sont des classes CSS de Bootstrap

	handleMouseOver() {
		this.btnOverState = "warning";
	}

	// exemple mouse enter & leave
	btnEnterLeaveState: "info" | "warning" = "info";

	handleMouseEnter() {
		this.btnEnterLeaveState = "warning";
	}

	handleMouseLeave() {
		this.btnEnterLeaveState = "info";
	}
}
