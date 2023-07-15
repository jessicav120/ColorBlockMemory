const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "pink"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.style.backgroundColor = "#97C5D8";

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clickCounter = [];
let matchedCards = [];
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  let clickedCard = event.target;
  let cardColor = clickedCard.getAttribute('class');

  if(clickCounter.length < 2 && !clickedCard.classList.contains("flipped")){
    clickCounter.push(clickedCard);
    clickedCard.classList.add('flipped');
    clickedCard.style.backgroundColor = cardColor;
    setTimeout(matchCheck, 1500);
  }
}

function matchCheck(){
  if(clickCounter.length != 2) return;
  let [card1, card2] = clickCounter;
  if(card1.classList[0] === card2.classList[0]){
      console.log("match");
      matchedCards.push();
    } else {
      for(let card of clickCounter){
        card.style.backgroundColor = '#97C5D8';
        card.classList.remove('flipped');
      }
    }
  clickCounter.length = 0;
}
// when the DOM loads
createDivsForColors(shuffledColors);
