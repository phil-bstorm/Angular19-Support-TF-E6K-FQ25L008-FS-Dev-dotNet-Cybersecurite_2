import {ValidatorFn} from "@angular/forms";

/**
 * Validator function to check if the input value is in the list of insults.
 * @param tableauInsultes - Array of insults to check against.
 * @returns A validator function that checks if the input value is in the list of insults.
 */
export function insultsValidator(tableauInsultes: string[]): ValidatorFn {
	// vérification de l'entrée
	return control => {
		const value = control.value;
		if (value && tableauInsultes.includes(value)) {
			return {insulte: true};
		}
		return null;
	};
}
