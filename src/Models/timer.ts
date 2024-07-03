import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

export class Timer {
  private timer$: Observable<number>;
  private timeLeftSubject: BehaviorSubject<number>;
  private totalTime: number;
  private isTimerRunning: boolean;

  constructor(totalTime: number) {
    this.totalTime = totalTime;
    this.timeLeftSubject = new BehaviorSubject<number>(totalTime);
    this.timer$ = interval(1000);
    this.isTimerRunning = false;
  }

  startTimer(): void {
    if (!this.isTimerRunning) {
      this.isTimerRunning = true;
      this.timer$
        .pipe(
          takeWhile(() => this.isTimerRunning)
        )
        .subscribe(() => {
          this.totalTime--;
          this.timeLeftSubject.next(this.totalTime);
          if (this.totalTime === 0) {
            this.stopTimer();
          }
        });
    }
  }

  stopTimer(): void {
    this.isTimerRunning = false;
  }

  resetTimer(): void {
    this.totalTime = this.totalTime;
    this.timeLeftSubject.next(this.totalTime);
    this.isTimerRunning = false;
  }

  getTimeLeft(): Observable<number> {
    return this.timeLeftSubject.asObservable();
  }
}
