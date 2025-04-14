import {Component} from "@angular/core";
import {DemoHeaderComponent} from "@app/features/demo/components/layout/demo-header/demo-header.component";
import {PokemonDemoComponent} from "@app/features/demo/pages/demo-http-client/components/pokemon-demo/pokemon-demo.component";
import {CarDemoComponent} from "@app/features/demo/pages/demo-http-client/components/car-demo/car-demo.component";

@Component({
	selector: "demo-http-client",
	imports: [DemoHeaderComponent, PokemonDemoComponent, CarDemoComponent],
	templateUrl: "./demo-http-client.component.html",
	styleUrl: "./demo-http-client.component.scss",
})
export class DemoHttpClientComponent {}
