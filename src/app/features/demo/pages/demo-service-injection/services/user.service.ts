import {Injectable, signal} from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class UserService {
	constructor() {}
	/* SANS SIGNAL (bad) */
	isConnectedV = false;

	/* AVEC SIGNAL */
	isConnected = signal(false);
	userName = signal("John Doe");
}
