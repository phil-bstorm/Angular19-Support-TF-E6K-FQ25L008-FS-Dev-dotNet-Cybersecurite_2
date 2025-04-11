import {Component, inject, OnInit} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {PokemonModel} from "@app/features/demo/pages/demo-http-client/models/pokemon.model";
import {PokemonApiV1Service} from "@app/features/demo/pages/demo-http-client/services/pokemon-api-v1.service";

@Component({
	selector: "demo-http-client",
	imports: [DemoHeaderComponent],
	templateUrl: "./demo-http-client.component.html",
	styleUrl: "./demo-http-client.component.scss",
})
export class DemoHttpClientComponent implements OnInit {
	private readonly _pokemonApiService = inject(PokemonApiV1Service);

	pokemonId: number = 162;
	pokemon: PokemonModel | null = null;

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
			},
		});
	}
}
