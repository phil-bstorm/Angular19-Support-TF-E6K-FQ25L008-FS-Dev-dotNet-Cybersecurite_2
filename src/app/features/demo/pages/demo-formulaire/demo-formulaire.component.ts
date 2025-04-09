import {Component, inject} from "@angular/core";
import {
	FormBuilder,
	FormControl,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";

@Component({
	selector: "demo-formulaire",
	imports: [ReactiveFormsModule, DemoHeaderComponent],
	templateUrl: "./demo-formulaire.component.html",
	styleUrl: "./demo-formulaire.component.scss",
})
export class DemoFormulaireComponent {
	private readonly _fb = inject(FormBuilder);

	// Formulaire de contact
	contactForm = this._fb.group({
		email: new FormControl("", [Validators.required, Validators.email]),
		firstName: this._fb.control("", [
			Validators.required,
			Validators.minLength(2),
		]),
		lastName: ["", [Validators.required, Validators.minLength(2)]],
	});

	onSubmit() {
		if (this.contactForm.valid) {
			console.log("Form Submitted!", this.contactForm.value);
		} else {
			console.log("Form is invalid");
		}
	}
}
