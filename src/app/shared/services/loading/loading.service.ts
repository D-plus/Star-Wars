import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  state$: Subject<boolean> = new Subject();

  start() {
    this.state$.next(true);
  }

  stop() {
    this.state$.next(false);
  }
}
