// ui.ts
export function createUI() {
    // Kreiranje dugmeta za start
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.id = 'startButton';
    document.body.appendChild(startButton);

    // Prostor za prikaz timera
    const description = document.createElement('div');
    description.id = 'description';
    description.textContent = 'Ovo je igra pogadjanja, sastoji se od 3 runde filmovi, fudbaleri i drzave svaka runda se sastoji od 5 igri i potrebno je da pogodite ocenu filma na IMDB-u, ocenu igraca u najnovijoj FIFA igrici ili broj stanovnika koje ima odredjena drzava (u milionima) nakon svake igre pogadja i kompjuter i na kraju je pobednik onaj koji pobedi u 2 od 3 runde.';
    document.body.appendChild(description);

     // Prostor za prikaz timera
    const timerDisplay = document.createElement('div');
    timerDisplay.id = 'timerDisplay';
    timerDisplay.textContent = 'Preostalo vreme: 30s';
    document.body.appendChild(timerDisplay);
  
    // Prostor za prikaz runde i teme
    const roundInfo = document.createElement('div');
    roundInfo.id = 'roundInfo';
    roundInfo.textContent = 'Runda: 1 | Tema: IMDb Ocena';
    document.body.appendChild(roundInfo);
  

    const roundQuestion = document.createElement('div');
    roundQuestion.id = 'roundQuestion';
    roundQuestion.textContent = 'Fight Club';
    document.body.appendChild(roundQuestion);

    // Input polje za unos vrednosti

    let odgdiv = document.createElement('div');
    document.body.appendChild(odgdiv);


    const inputField = document.createElement('input');
    inputField.type = 'number';
    inputField.id = 'inputField';
    inputField.placeholder = 'Unesi vrednost';
    odgdiv.appendChild(inputField);


    const submitbutton = document.createElement('button');
    submitbutton.textContent = 'Submit';
    submitbutton.id = 'startButton';
    odgdiv.appendChild(submitbutton);

  
    const odgovor = document.createElement('div');
    odgovor.id = 'odgovor';
    document.body.appendChild(odgovor);


    // Prostor za prikaz predviđanja kompjutera
    const computerGuess = document.createElement('div');
    computerGuess.id = 'computerGuess';
    computerGuess.textContent = 'Predviđanje kompjutera: ?';
    odgovor.appendChild(computerGuess);
  
    // Prostor za prikaz ukupnog rezultata
    const totalScore = document.createElement('div');
    totalScore.id = 'totalScore';
    totalScore.textContent = 'Ukupan rezultat: 0';
    odgovor.appendChild(totalScore);
  }
  