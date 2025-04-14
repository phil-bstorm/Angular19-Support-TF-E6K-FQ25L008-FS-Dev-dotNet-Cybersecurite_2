import {Component} from "@angular/core";
import {ExerciseHeaderComponent} from "@app/features/exercise/components/layout/exercise-header/exercise-header.component";
import {AuthenticationComponent} from "@app/features/exercise/pages/exercise-http-interceptor/components/authentication/authentication.component";

@Component({
	selector: "exercise-http-interceptor",
	imports: [ExerciseHeaderComponent, AuthenticationComponent],
	templateUrl: "./exercise-http-interceptor.component.html",
	styleUrl: "./exercise-http-interceptor.component.scss",
})
export class ExerciseHttpInterceptorComponent {}
