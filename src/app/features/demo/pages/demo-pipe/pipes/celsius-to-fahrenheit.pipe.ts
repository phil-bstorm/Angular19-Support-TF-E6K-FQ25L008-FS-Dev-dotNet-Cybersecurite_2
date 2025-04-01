import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
	name: "celsiusToFahrenheit",
})
export class CelsiusToFahrenheitPipe implements PipeTransform {
	transform(value: number): unknown {
		return value * 1.8 + 32; // 3. implémenter la logique de transformation
	}
}
