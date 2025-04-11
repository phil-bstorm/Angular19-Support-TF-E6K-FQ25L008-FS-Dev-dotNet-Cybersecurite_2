import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CarV1Model} from "@app/features/demo/pages/demo-http-client/models/car-v1.model";

@Injectable({
	providedIn: "root",
})
export class CarApiV1Service {
	private readonly _httpClient = inject(HttpClient);

	create(car: CarV1Model) {
		return this._httpClient.post<CarV1Model>(
			"http://localhost:3000/cars",
			car,
		);
	}
}
