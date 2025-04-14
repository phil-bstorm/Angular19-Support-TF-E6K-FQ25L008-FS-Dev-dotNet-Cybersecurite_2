import {Component, inject, OnInit} from "@angular/core";
import {PokemonApiV1Service} from "@app/features/demo/pages/demo-http-client/services/pokemon-api-v1.service";
import {PokemonModel} from "@app/features/demo/pages/demo-http-client/models/pokemon.model";

@Component({
	selector: "pokemon-demo",
	imports: [],
	templateUrl: "./pokemon-demo.component.html",
	styleUrl: "./pokemon-demo.component.scss",
})
export class PokemonDemoComponent implements OnInit {
	private readonly _pokemonApiService = inject(PokemonApiV1Service);

	pokemonId: number = 162;
	pokemon: PokemonModel | null = null;
	pokemonError: string = "";

	ngOnInit(): void {
		this._pokemonApiService.getPokeId(this.pokemonId).subscribe({
			next: (response: PokemonModel) => {
				console.log(response);
				this.pokemon = response;
			},
			error: error => {
				console.error(
					"Erreur lors de la récupération des données :",
					error,
				);
				this.pokemonError = error.message;
			},
		});
	}
}
