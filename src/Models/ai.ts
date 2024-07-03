import { BehaviorSubject } from 'rxjs';

export class ComputerLogic {
  private computerGuessSubject: BehaviorSubject<number>;

  constructor() {
    this.computerGuessSubject = new BehaviorSubject<number>(0);
  }

  generateGuess(min: number, max: number): void {
    // Implement logic for computer's guess here
    const guess = Math.floor(Math.random() * (max - min + 1)) + min;
    this.computerGuessSubject.next(guess);
  }

  getComputerGuess(): BehaviorSubject<number> {
    return this.computerGuessSubject;
  }
}
