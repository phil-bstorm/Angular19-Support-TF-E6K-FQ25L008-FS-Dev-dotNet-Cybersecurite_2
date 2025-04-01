import {Component} from "@angular/core";

@Component({
	selector: "demo-property-binding",
	imports: [],
	templateUrl: "./demo-property-binding.component.html",
	styleUrl: "./demo-property-binding.component.scss",
})
export class DemoPropertyBindingComponent {
	imageUrlCat: string = "assets/demo/bindings/cat.webp";
	isDisabled: boolean = true;
	url: string = "https://www.google.com";
}
