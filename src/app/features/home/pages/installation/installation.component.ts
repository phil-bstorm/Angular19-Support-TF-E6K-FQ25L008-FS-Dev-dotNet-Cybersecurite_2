import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {RouterLink} from "@angular/router";
import {NAV_THEORY} from "@core/constants/navigation.constants";

@Component({
	selector: "installation",
	imports: [HighlightJsDirective, RouterLink],
	templateUrl: "./installation.component.html",
	styleUrl: "./installation.component.scss",
})
export class InstallationComponent {
	protected readonly NAV_THEORY = NAV_THEORY;
}
