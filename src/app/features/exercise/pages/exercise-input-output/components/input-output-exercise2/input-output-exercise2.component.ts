import {Component} from "@angular/core";
import {SpoilComponent} from "@shared/components/spoil/spoil.component";
import {TodoListFormComponent} from "./components/todo-list-form/todo-list-form.component";
import {TodoListListingComponent} from "./components/todo-list-listing/todo-list-listing.component";

@Component({
	selector: "input-output-exercise2",
	imports: [SpoilComponent, TodoListFormComponent, TodoListListingComponent],
	templateUrl: "./input-output-exercise2.component.html",
	styleUrl: "./input-output-exercise2.component.scss",
})
export class InputOutputExercise2Component {
	imgUrlResultat: string =
		"assets/exercise/input-output/todo-list-resultat.png";
	imgUrlStructure: string =
		"assets/exercise/input-output/todo-list-structure.png";

	listOfTodo: string[] = [];
	onNewTask(taskname: string) {
		this.listOfTodo.push(taskname);
	}
}
