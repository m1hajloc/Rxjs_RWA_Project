import { Timer } from './timer';
import { ComputerLogic } from './ai';
import { QuestionInterface } from '../Interface/QuestionInterface';

export class Game {
  private URL:string;
  private gameData1: QuestionInterface[];
  private gameData2: QuestionInterface[];
  private gameData3: QuestionInterface[];
  private currentRoundData: QuestionInterface[] = [];

 // private timer: Timer;
  //private computerLogic: ComputerLogic;

  constructor() {
    this.URL = "http://localhost:3000/"
   // this.timer = new Timer(30); // Postaviš željeno vreme tajmera ovde
   // this.computerLogic = new ComputerLogic();
  }

  async fetchQuestions(): Promise<void>{
    try{
        const response1 = await fetch(this.URL+"movies");
        const response2 = await fetch(this.URL+"footballers");
        const response3 = await fetch(this.URL+"countries");
        if (!response1.ok || !response2.ok ||!response3.ok ) {
            throw new Error('Problem fetching game data');
          }
          this.gameData1 = await response1.json();
          this.gameData2 = await response2.json();
          this.gameData3 = await response3.json();
    }   catch (error) {
        console.error('Error fetching game data:', error);
      }
  }

  private getRandomIndices(min: number, max: number, count: number): number[] {
    const indices: number[] = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }

  generateQuestionsAndAnswers(round:number): void {
    // Ovde generišemo pitanja i odgovore za sve tri runde
    // Uzimamo 5 random brojeva za svaku rundu
    const randomIndices = this.getRandomIndices(0, 19, 5);
    if (round===0){
    this.currentRoundData = randomIndices.map(index => this.gameData1[index]);}
    else{ if(round===1){
        this.currentRoundData = randomIndices.map(index => this.gameData2[index]);}

    
    else{
        this.currentRoundData = randomIndices.map(index => this.gameData3[index]);}
    }
    console.log('Pitanja i odgovori za trenutnu rundu:', this.currentRoundData);
  }







    // Pokrećeš tajmer
  //  this.timer.startTimer();

    // Generišeš prvo predviđanje kompjutera
  //  this.computerLogic.generateGuess(1, 100);

    // Pretplata na observable za preostalo vreme
  //  this.timer.getTimeLeft().subscribe(timeLeft => {
  //    console.log(`Time left: ${timeLeft}s`);
  //  });

    // Pretplata na observable za predviđanje kompjutera
  //  this.computerLogic.getComputerGuess().subscribe(guess => {
  //    console.log(`Computer guessed: ${guess}`);
//   });
 // }

  // Ostale funkcije i logika igre bi išle ovde
}
