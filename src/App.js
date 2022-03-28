import './App.css';
import Quotes from './components/Quotes.json';
import QuotesBox from './components/QuoteBox';
import React, { useState} from 'react';
import Button from './components/Button.js';


function App() {
  //We define the lenght of our JSON
  let lenghtQuotes = Quotes.quotes.length-1
  //Once defined the lenght we can use it to pick a random number 
  const randomNumber = Math.floor(Math.random()*lenghtQuotes)
  //finally we use the random number to posisionate our useState
let [quotes, setQuotes] = useState(Quotes.quotes[randomNumber])

  //Now we have to change the background color so we define our useState
  const [color, setColor] = useState("blue");

const changingColor = () => {
  const randomColor = Math.floor(Math.random()*7);
  
  if (randomColor === 0){ 
      setColor ('blue')
  } else if (randomColor === 1){
    setColor ('purple')
  } else if (randomColor === 2){
    setColor ('brown')
  } else if (randomColor === 3){
    setColor ('yellow')
  } else if (randomColor === 4){
    setColor ('gray')
  } else if (randomColor === 5){
    setColor ('white')
  } else if (randomColor === 6){
    setColor ('orange')
  } else if (randomColor === 7){
    setColor ('green')
 
}
}

const newQuote = () => {
  const randomNumber = Math.floor(Math.random()*lenghtQuotes);
  setQuotes(Quotes.quotes[randomNumber]);
  changingColor()
}
 
  return (
    <div className="App">
      
      <div className={`major-div ${color}`}>
      <div className='container' >
       <QuotesBox quote={quotes}  />
       <Button  change={newQuote} changeColor={`btn ${color}`} />
       </div>
      </div>
    </div>
  );
}

export default App;
