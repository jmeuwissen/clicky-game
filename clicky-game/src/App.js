import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Pic(id, source, clickHandler) {
    this.id = id;
    this.source = source;
    this.clickHandler = clickHandler;
  
}

function eventCreator(picID) {
  
}

function arrayShuffler(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random()* (i+1));

    [array[i], array[j]] = [array[j], array[i]]
  }

  return array;
}

function clickHandler(event){
  event.preventDefault();
  const localID = event.target.id;
  if (clickedPics.indexOf(localID) !== -1){
    loseGame();
  }
  else{
    correctClickHandler(localID);
  }
}

function loseGame() {
  setFeedback("You guessed incorrectly!");
  resetGame();
}

function correctClickHandler(numClicked) {
  if(clickedPics.length === 12){
    setFeedback("You Won!!!");
    resetGame();
  }
  else{
    setFeedback("You guessed correctly!")
    //could prevent bug with setting state
    // const temp = clickedPics;
    // temp.push(numClicked);
    setClickedPics(clickedPics.push(numClicked));
    setScore(score + 1);
    setShuffledPics(arrayShuffler(pics));
  }
}

function resetGame() {
  setTopScore(score);
  setScore(0);
  setClickedPics([]);
  setShuffledPics(arrayShuffler(pics));
}

const pics = [
  
    new Pic(1,"../Joseph.png",),
    new Pic(2,"../Josuke.png",),
    new Pic(3,"../Jotaro.png",),
    new Pic(4,"../Koichi.png",),
    new Pic(5,"../Okuyasa.png",),
    new Pic(6,"../Rohan.png",),
    new Pic(7,"../Ryohei.png",),
    new Pic(8,"../Tamami.png",),
    new Pic(9,"../Tomoko.png",),
    new Pic(10,"../Shigechi.png",),
    new Pic(11,"../Reimi.png",),
    new Pic(12,"../Hayato.png",)

]


function App() {
  const [shuffledPics, setShuffledPics] = useState(arrayShuffler(pics));
  const [clickedPics, setClickedPics] = useState([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("Click an image to begin!");
  const [topScore, setTopScore] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
