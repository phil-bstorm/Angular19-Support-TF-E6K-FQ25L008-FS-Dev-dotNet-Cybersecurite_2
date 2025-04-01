import {Component} from "@angular/core";
import {HighlightJsDirective} from "ngx-highlight-js";
import {CelsiusToFahrenheitPipe} from "@app/features/demo/pages/demo-pipe/pipes/celsius-to-fahrenheit.pipe";

@Component({
	selector: "demo-custom-pipe",
	imports: [HighlightJsDirective, CelsiusToFahrenheitPipe],
	templateUrl: "./demo-custom-pipe.component.html",
	styleUrl: "./demo-custom-pipe.component.scss",
})
export class DemoCustomPipeComponent {
	maVariableTemperature: number = 30;
}
