
import {interval} from "rxjs"
import { createUI } from "./UI/ui";
import { Game } from "./Models/game";

createUI();


function GetrandomNumber(){
    return Math.round( Math.random() * 100);

}

console.log(GetrandomNumber());
let gamemanager = new Game();
gamemanager.fetchQuestions();
setTimeout(()=>{gamemanager.generateQuestionsAndAnswers(2);
    gamemanager.generateQuestionsAndAnswers(1);
    gamemanager.generateQuestionsAndAnswers(0);
},1000);



interval(500);