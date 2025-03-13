import {
	Component,
	input,
	OnInit,
	output,
	signal,
	WritableSignal,
} from "@angular/core";
import {FolderStructureModel} from "@shared/components/folder-structure/models/folder-structure.model";
import {NgClass} from "@angular/common";

@Component({
	selector: "folder-structure",
	imports: [NgClass],
	templateUrl: "./folder-structure.component.html",
	styleUrl: "./folder-structure.component.scss",
})
export class FolderStructureComponent implements OnInit {
	/* Inputs */
	folderStructure = input.required<FolderStructureModel>();

	/* Outputs */
	interactWith = output<string>();

	/* Inputs used for the recursive */
	pathInput = input<string>("");
	interactingWith = input<WritableSignal<string>>(signal<string>(""));

	/* Variables */
	isOpen = true;
	path: string = "";

	ngOnInit() {
		if (this.pathInput()) {
			this.path = this.pathInput() + "/";
		}
	}

	onElementClick(element: string) {
		this.interactWith.emit(element);
		this.interactingWith().set(element);
	}

	closeFolder() {
		this.isOpen = false;
	}

	openFolder() {
		this.isOpen = true;
	}
}
