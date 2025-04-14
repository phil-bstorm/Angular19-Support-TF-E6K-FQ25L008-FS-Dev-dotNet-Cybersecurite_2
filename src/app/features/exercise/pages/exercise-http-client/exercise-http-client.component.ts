import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {BookComponent} from "@app/features/exercise/pages/exercise-http-client/components/book/book.component";

@Component({
	selector: "exercise-http-client",
	imports: [ExerciseHeaderComponent, BookComponent],
	templateUrl: "./exercise-http-client.component.html",
	styleUrl: "./exercise-http-client.component.scss",
})
export class ExerciseHttpClientComponent {}
