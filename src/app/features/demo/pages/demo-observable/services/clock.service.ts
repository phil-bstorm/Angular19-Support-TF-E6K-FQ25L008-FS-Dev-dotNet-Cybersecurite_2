import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ClockService {
	cptSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	getClock(): Observable<Date> {
		return new Observable<Date>(observer => {
			const intervalId = setInterval(() => {
				observer.next(new Date());
				this.cptSubject$.next(this.cptSubject$.value + 1);
			}, 1000);

			// Nettoyage en cas de désabonnement
			return () => clearInterval(intervalId);
		});
	}
}
