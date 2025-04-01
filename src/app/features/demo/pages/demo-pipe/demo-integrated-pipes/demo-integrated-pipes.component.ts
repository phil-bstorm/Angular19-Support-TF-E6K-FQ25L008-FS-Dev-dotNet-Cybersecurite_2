import {Component} from "@angular/core";
import {
	CurrencyPipe,
	DatePipe,
	DecimalPipe,
	JsonPipe,
	LowerCasePipe,
	PercentPipe,
	SlicePipe,
	TitleCasePipe,
	UpperCasePipe,
} from "@angular/common";

@Component({
	selector: "demo-integrated-pipes",
	imports: [
		UpperCasePipe,
		LowerCasePipe,
		TitleCasePipe,
		DatePipe,
		CurrencyPipe,
		DecimalPipe,
		PercentPipe,
		JsonPipe,
		SlicePipe,
	],
	templateUrl: "./demo-integrated-pipes.component.html",
	styleUrl: "./demo-integrated-pipes.component.scss",
})
export class DemoIntegratedPipesComponent {
	maVariableDate: Date = new Date("2020-04-03");
}
