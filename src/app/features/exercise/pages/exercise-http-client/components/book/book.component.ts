import {Component} from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "book",
	imports: [RouterOutlet],
	templateUrl: "./book.component.html",
	styleUrl: "./book.component.scss",
})
export class BookComponent {}
