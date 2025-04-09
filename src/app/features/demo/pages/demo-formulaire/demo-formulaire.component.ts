import {Component, inject} from "@angular/core";
import {
	FormBuilder,
	FormControl,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {insultsValidator} from "@app/features/demo/pages/demo-formulaire/validator-custom/insults.validator";

@Component({
	selector: "demo-formulaire",
	imports: [ReactiveFormsModule, DemoHeaderComponent],
	templateUrl: "./demo-formulaire.component.html",
	styleUrl: "./demo-formulaire.component.scss",
})
export class DemoFormulaireComponent {
	private readonly _fb = inject(FormBuilder);

	// addreses du formulaire de contact
	addresses = this._fb.array([
		this._fb.group({
			street: ["", [Validators.required]],
			city: ["", [Validators.required]],
		}),
	]);

	private tableauInsultes = [
		"insulte1",
		"insulte2",
		"insulte3",
		"insulte4",
		"insulte5",
	];

	// formulaire de contact
	contactForm = this._fb.group({
		email: new FormControl("", [Validators.required, Validators.email]),
		firstName: this._fb.control("", [
			Validators.required,
			Validators.minLength(2),
			insultsValidator(this.tableauInsultes),
		]),
		lastName: ["", [Validators.required, Validators.minLength(2)]],
		addresses: this.addresses,
	});

	addAddress() {
		this.addresses.push(
			this._fb.group({
				street: ["", [Validators.required]],
				city: ["", [Validators.required]],
			}),
		);
	}

	removeAddress(index: number) {
		if (index > 0) {
			this.addresses.removeAt(index);
		}
	}

	onSubmit() {
		if (this.contactForm.valid) {
			console.log("Form Submitted!", this.contactForm.value);
		} else {
			console.log("Form is invalid");
		}
	}
}
