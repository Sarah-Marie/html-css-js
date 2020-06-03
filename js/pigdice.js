//start with loaded function
const loaded = () => {
    let games = 0;
    let highScore = 100;
    for(let idx = 0; idx < 10; idx++) {
        let score = playPigDice();
        if(score > highScore) {
            highScore = score;
        }
    }
     
     setScore(highScore);
}
//need a function to push score into div tag
const setScore = (score) => {
    //putting span tag in div, so need inner html
    let span = `<span>PigDice high score is ${score}</span>`;
    document.getElementById("score").innerHTML = span;
}
const roll = () => {
   return Math.floor(Math.random() * 6) + 1; 
}
const playPigDice = () => {
//need to roll die and save the number
      let score = 0;
      let die = roll();
      //while loop-while die is not one, roll again and add die score to total score
      while(die != 1) {
          score += die;
          die = roll();
      }
      return score;
}