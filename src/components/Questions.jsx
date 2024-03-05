import { useState } from 'react';
import Question from "./Question";
import { QuestionsArray } from "../QuestionsArray";
import TieBreaker from './TieBreaker';
import { colorsArray } from '../ColorsArray';
import { AnimatePresence, motion } from 'framer-motion';


const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array;
};

const shuffledQuestions = () => { 
    let tempQuestions = shuffle(QuestionsArray);
    tempQuestions.map((q)=>{
    let shuffleOptions = shuffle(q.options);
    q.options = shuffleOptions;
    })
    return tempQuestions;
}


const addPoints = (oldPoints, newPoints) => {
    let addition = newPoints.map((p, i) => {
      return p + oldPoints[i];
    });
    addition;
    return addition;
}

let questions = shuffledQuestions();

//  QUESTIONS EXPORT DEFAULT
const Questions = ({ showResult, changeColors}) => {
    const [points, setPoints] = useState([ 0, 0, 0, 0, 0])
    const [tempPoints, setTempPoints] = useState([ 0, 0, 0, 0, 0]);
    const [qNumber, setQNumber] = useState(0);
    const [enable, setEnable] = useState(false);
    const [tie, setTie] = useState(false);

    const checkTie = (p) => {
        let indices = [];
        let element = Math.max(...p);
        let idx = p.indexOf(element);
        while (idx != -1) {
        indices.push(idx);
        idx = p.indexOf(element, idx + 1);
        }
        return (indices.length > 1);
    }

   
    const nextColor = () => {
        let color = colorsArray[Math.floor(Math.random()*colorsArray.length)];
        return color;
    }

    const nextQuestion = () => {
        if (!enable) return;
        let p = addPoints(points, tempPoints);
        setPoints(p);
        setQNumber((n) => n + 1);    
        setEnable(false);
        changeColors(nextColor());
        if(qNumber + 1 >= questions.length ){
            if(checkTie(p)){
                setTie(true);
            }else{
                showResult(p);
                questions = shuffledQuestions();
                setTie(false);
            }
        }
    }

    const clickOptions = (p) => {
        setEnable(true);
        setTempPoints(p);
    }  

    return ( 
        <div className='Question-container'>
            <div className='progressBar' style={{"transform":"scaleX("+((qNumber)/(questions.length))+")"}}/>
             <AnimatePresence initial={false} mode="wait">
                <motion.div 
                className='Question' 
                key={qNumber}
                animate={{opacity: 1}} 
                initial={{opacity: 0}}
                exit={{opacity:0}}
                transition={{duration: .2}}
                >
                
                    {
                        tie ? 
                        <TieBreaker points={points} clickOptions={clickOptions} /> :
                        <Question question={questions[qNumber]} clickOptions={clickOptions} name={qNumber}/>
                    }
                    <motion.button 
                    onClick={nextQuestion}  
                    className={enable ? "": "disabled"}
                    initial={{opacity:0}}
                    animate={{opacity:enable ? 1 : 0.3}}
                    transition={{duration: .2}}


                    >siguiente</motion.button>
                </motion.div>
            </AnimatePresence>
        </div>
     );
}
 
export default Questions;