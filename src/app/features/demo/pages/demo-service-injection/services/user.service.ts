import {Injectable, signal} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class UserService {
	constructor() {}

	isConnected = signal(false);
}
