import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {UserService} from "@app/features/demo/pages/demo-service-injection/services/user.service";
import {ChapterName, CoursesInstance} from "@core/constants/chapters.constants";

export const isConnectedGuard: CanActivateFn = (route, state) => {
	const userService = inject(UserService);
	const router = inject(Router);

	if (userService.isConnected()) {
		return true; // l'utilisateur est connecté, on autorise l'accès
	} else {
		// l'utilisateur n'est pas connecté, on redirige vers la page de connexion
		router.navigate([
			// (ce projet n'a pas depage de connection donc on le redirige vers la démo pour l'instant)
			"/",
			"demo",
			CoursesInstance.getChapterId(ChapterName.ServiceInjection),
		]);
		return false; // on bloque l'accès
	}
};
