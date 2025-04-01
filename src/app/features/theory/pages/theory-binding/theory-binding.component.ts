import {Component} from "@angular/core";
import {TheoryHeaderComponent} from "@app/features/theory/components/layout/theory-header/theory-header.component";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "theory-binding",
	imports: [TheoryHeaderComponent, FormsModule],
	templateUrl: "./theory-binding.component.html",
	styleUrl: "./theory-binding.component.scss",
})
export class TheoryBindingComponent {
	// interpolation
	title: string = "Bienvenue sur Angular";

	// property binding
	estDesactive: boolean = true;
	username: string = "John Doe";

	handleClick() {
		alert("Button clicked!");
	}
}
