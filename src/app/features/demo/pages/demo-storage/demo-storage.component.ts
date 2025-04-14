import {Component, OnInit} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "demo-storage",
	imports: [DemoHeaderComponent, FormsModule],
	templateUrl: "./demo-storage.component.html",
	styleUrl: "./demo-storage.component.scss",
})
export class DemoStorageComponent implements OnInit {
	username: string = ""; //  valeur de l'input

	usernameLS: string = "";
	usernameSS: string = "";

	ngOnInit(): void {
		this.usernameLS = localStorage.getItem("username") || "";
		this.usernameSS = sessionStorage.getItem("username") || ""; // ne pas utiliser SessionStorage
	}

	saveLocalStorageUsername() {
		localStorage.setItem("username", this.username);
	}

	saveSessionStorageUsername() {
		sessionStorage.setItem("username", this.username); // ne pas utiliser SessionStorage
	}
}
