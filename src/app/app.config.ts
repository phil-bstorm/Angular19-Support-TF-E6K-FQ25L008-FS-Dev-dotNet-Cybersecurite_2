import {ApplicationConfig, provideZoneChangeDetection} from "@angular/core";
import {provideRouter, withInMemoryScrolling} from "@angular/router";
import {provideHttpClient, withInterceptors} from "@angular/common/http";

import {routes} from "./app.routes";
import { tokenInterceptor } from "./features/exercise/pages/exercise-http-interceptor/interceptors/token.interceptor";
import { errorInterceptor } from "./features/exercise/pages/exercise-http-interceptor/interceptors/error.interceptor";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({eventCoalescing: true}),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: "enabled",
			}),
		),
		provideHttpClient(withInterceptors([tokenInterceptor, errorInterceptor])),
	],
};
