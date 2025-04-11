import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PokemonModel} from "@app/features/demo/pages/demo-http-client/models/pokemon.model";

@Injectable({
	providedIn: "root",
})
export class PokemonApiV1Service {
	private readonly _httpClient = inject(HttpClient);

	getPokeId(id: number) {
		return this._httpClient.get<PokemonModel>(
			"https://pokeapi.co/api/v2/pokemon/" + id,
		);
	}
}
