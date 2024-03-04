import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import Result from './components/Result'
import Questions from './components/Questions'
import { ResultsArray } from './ResultArray'
import Porcentage from './components/Porcentage'
import { AnimatePresence, motion } from 'framer-motion';


function App() {
  const [points, setPoints] = useState([ 0, 0, 0, 0, 0]);
  const [colors, setColors] = useState(["#1E2426", "#C68951"]);
  const [page, setPage] = useState(0);
  const [winner, setWinner] = useState(ResultsArray[0]);

  const restartTest = () => {
    setPage(0);
    setPoints([ 0, 0, 0, 0, 0]);
  }

  const startTest = () => {
    setPage(1);
  }

  const calcWinner = (points) => {
    let winner = 0;
    for (let i = 0; i < points.length; i++) {
        winner = points[i] > points[winner] ? i : winner;
    }
    return winner;
  }


  const changeColors = (newColors) => {
    setColors(newColors);
  }

  const showResult = (finalPoints) => {
    setPoints(finalPoints);
    let w = ResultsArray[calcWinner(finalPoints)]
    setWinner(w);
    changeColors(w.colors);
    setPage(2);
  }

  const pageSwitch = () => {
      switch(page) {
        case 2:
          return (
          <Result restart={restartTest} winner={winner}>
            <Porcentage points={points}/>
          </Result>
          )
        case 1: 
          return <Questions showResult={showResult} changeColors={changeColors}/>;
        default:
          return <HomePage startTest={startTest} />;
      }
  }

  return (
    <>
      <div className='container' style={{"--color-background": colors[0], "--color-resaltado": colors[1]}}>
        <div className='app'>

        <AnimatePresence initial={false} mode="wait">

          <motion.div 
          className='animation'
          key={page}
          animate={{opacity: 1}} 
          initial={{opacity: 0}}
          exit={{opacity:0}}
          transition={{duration: .2}}
          >
            {   pageSwitch()  }
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default App
