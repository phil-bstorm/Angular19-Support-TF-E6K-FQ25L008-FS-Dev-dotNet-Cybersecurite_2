import {Component, inject} from "@angular/core";
import {CarApiV1Service} from "@app/features/demo/pages/demo-http-client/services/car-api-v1.service";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {CarV1Model} from "@app/features/demo/pages/demo-http-client/models/car-v1.model";

@Component({
	selector: "car-demo",
	imports: [ReactiveFormsModule],
	templateUrl: "./car-demo.component.html",
	styleUrl: "./car-demo.component.scss",
})
export class CarDemoComponent {
	private readonly _carApiV1Service = inject(CarApiV1Service);
	private readonly _fb = inject(FormBuilder);

	readonly carForm = this._fb.group({
		brand: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(32),
			],
		],
		model: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(32),
			],
		],
		year: [new Date().getFullYear()],
	});

	isCreating = false; // Si vrai, on affiche une animation de chargement
	creatingError = "";
	creatingSuccess: boolean | null = null; // Si vrai, on affiche un message de succès, sinon on affiche un message d'erreur (si null c'est qu'on n'a pas encore essayé de créer une voiture)

	onSubmit() {
		if (this.carForm.valid) {
			// On affiche une animation de chargement
			this.isCreating = true;
			this.creatingError = ""; // On reset l'erreur
			this.creatingSuccess = null; // On reset le succès

			// on crée une voiture (pour le typage)
			const car: CarV1Model = {
				id: null,
				// on utilise le "!" pour dire à TypeScript qu'on est sûr que la valeur n'est pas nulle (elle est validé par les validators)
				brand: this.carForm.value.brand!,
				model: this.carForm.value.model!,
				year: this.carForm.value.year!,
			};

			// appelle API pour créer une voiture
			this._carApiV1Service.create(car).subscribe({
				next: car => {
					this.isCreating = false;
					this.creatingSuccess = true; // On affiche un message de succès
					console.log(car);
				},
				error: error => {
					console.error(error);
					this.isCreating = false;
					this.creatingSuccess = false; // On affiche un message d'erreur
					this.creatingError = error.message;
				},
			});
		}
	}
}
