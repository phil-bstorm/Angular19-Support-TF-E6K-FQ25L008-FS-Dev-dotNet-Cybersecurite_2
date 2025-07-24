import {Component, input} from "@angular/core";

@Component({
	selector: "todo-list-listing",
	imports: [],
	templateUrl: "./todo-list-listing.component.html",
	styleUrl: "./todo-list-listing.component.scss",
})
export class TodoListListingComponent {
	todos = input.required<string[]>();
}
