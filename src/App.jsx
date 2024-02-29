import { useEffect, useState } from 'react'
import './App.css'
import Question from './components/Question'
import { Questions } from './Questions'
import HomePage from './components/HomePage'
import Result from './components/Result'

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;
};

function App() {
  const [points, setPoints] = useState( [ 0, 0, 0, 0, 0] );
  const [tempPoints, setTempPoints] = useState([ 0, 0, 0, 0, 0]);
  const [questions, setQuestions] = useState(false);
  const [qnumber, setQNumber] = useState(0);
  const [start, setStart] = useState(false);
  const [colors, setColors] = useState(["#1E2426", "#C68951"]);


  useEffect(() => {
    shuffleQuestions();
  }, []);


  const shuffleQuestions = () =>{ 

    let shuffledQuestions = shuffle(Questions);
    shuffledQuestions.map((q)=>{
      let shuffleOptions = shuffle(q.options)
      q.options = shuffleOptions;
    })

    setQuestions(shuffledQuestions)
  }

  const sumPoints = () => {
    let array1 = tempPoints;
    let sum = array1.map((num, i) => {
      return num + points[i];
    });
    setPoints(sum);
  }

  const restartTest = () => {
    setStart(false);
    shuffleQuestions();
    setQNumber(0);
    setPoints( [ 0, 0, 0, 0, 0] );
  }

  const startTest = () => {
    setStart(true);
  }

  const nextQuestion = (enable) => {
    if(enable){
      sumPoints();
      setQNumber(qnumber + 1);
    }
  }
  const changeColors = (newColors) => {
    setColors(newColors)
  }

  const pageSwitch = () => {

    if (!start){
      return (
        <HomePage startTest={startTest}/>
      )
    } else if (qnumber + 1 > questions.length){
      return(
        <Result restart={restartTest} points={points} changeColors={changeColors}/>
      )
    } else{
      return (
        <Question question={questions[qnumber]} nextQuestion={nextQuestion} qNumber={qnumber} setTempPoints={setTempPoints} changeColors={changeColors}/>
      )
    }
  }

  return (
    <>
      <div className='container' style={{"--color-background": colors[0], "--color-resaltado": colors[1]}}>
        {
          start ? <div className='bar' style={{"transform":"scaleX("+((qnumber)/(questions.length))+")"}}/> : ""
        }
        <div className='app'>
        {   pageSwitch()  }
        </div>
      </div>
    </>
  )
}

export default App
