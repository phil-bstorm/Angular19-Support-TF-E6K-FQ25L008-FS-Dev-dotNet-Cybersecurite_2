import {Component, output} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
	selector: "todo-list-form",
	imports: [FormsModule],
	templateUrl: "./todo-list-form.component.html",
	styleUrl: "./todo-list-form.component.scss",
})
export class TodoListFormComponent {
	newTask = output<string>();

	taskname: string = "";

	onSave() {
		this.newTask.emit(this.taskname);
	}
}
