import {Component} from "@angular/core";
import {RouterLink} from "@angular/router";
import {
	NAV_INSTALLATION,
	NAV_THEORY,
} from "@core/constants/navigation.constants";

@Component({
	selector: "home",
	imports: [RouterLink],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.scss",
})
export class HomeComponent {
	protected readonly NAV_THEORY = NAV_THEORY;
	protected readonly NAV_INSTALLATION = NAV_INSTALLATION;
}
