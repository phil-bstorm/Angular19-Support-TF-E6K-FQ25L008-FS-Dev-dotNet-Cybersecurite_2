import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {Product} from "./models/product.interface";

@Component({
	selector: "exercise-directive",
	imports: [ExerciseHeaderComponent],
	templateUrl: "./exercise-directive.component.html",
	styleUrl: "./exercise-directive.component.scss",
})
export class ExerciseDirectiveComponent {
	products: Product[] = [
		{
			nom: "Patates",
			photo: "http://example.com/photo",
			prix: 50,
			prixPromo: false,
			qttRestante: 10,
		},
		{
			nom: "Fraises",
			photo: "http://example.com/photo",
			prix: 20,
			prixPromo: true,
			nouveauPrix: 10,
			qttRestante: 10,
		},
		{
			nom: "Banane",
			photo: "http://example.com/photo",
			prix: 75,
			prixPromo: false,
			qttRestante: 0,
		},
	];
}
