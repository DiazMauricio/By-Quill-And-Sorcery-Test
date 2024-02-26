import { useState, useEffect } from 'react';
import './Question.css';

const colorsArray = [
  ["#8C5442", "#270E0E"],
  ["#2B343B", "#A64C4C"],
  ["#467373", "#513542"],
  ["#404637", "#D97E4A"],
  ["#3E2B2C", "#7571A3"],
  ["#8D6C54", "#1A1C26"],
  ["#3A4048", "#9E7287"],
  ["#888C5B", "#333016"],
  ["#383E3F", "#688A60"],
  ["#727043", "#402C2C"],
  ["#4A3E45", "#C7B1C2"],
  ["#414A4D", "#8F9FAD"],
  ["#567789", "#282638"],
  ["#563C47", "#6B8982"]
]

const Question = ({question, nextQuestion, qNumber, setTempPoints, changeColors}) => {
    const [enable, setEnable] = useState(false)

    useEffect(() => {
        let randomColor = Math.floor(Math.random() * colorsArray.length);
        changeColors(colorsArray[randomColor])
        setEnable(false);
    }, [question]);

    return ( 
        <div className='Question'>
            <p>{question?.text}</p>
            {
                question?.options.length === 2 ? 
                    <RangeQuestion 
                        options={question.options} 
                        setTempPoints={setTempPoints} 
                        qNumber={qNumber} 
                        setEnable={setEnable}/>
                : 
                    <MultiQuestion 
                        options={question.options} 
                        setTempPoints={setTempPoints} 
                        qNumber={qNumber} 
                        setEnable={setEnable}/>
            }
            <button onClick={() => nextQuestion(enable)}  className={enable ? "": "disabled"}>siguiente</button>
            
        </div>
    );
}

export default Question;


const RadioOpc = ({qNumber, onClick}) => {
    return (
        <label className="answer" onClick={onClick}>
            <input type="radio" name={qNumber}/>
            <span className="option"/>
        </label>
    )
}
const MultiOpc = ({qNumber, option, onClick}) => {
    return (
        <label className="answer" onClick={onClick}>
            <input type="radio" name={qNumber}/>
            <span className="option"> {option.text} </span>
        </label>
    )
}

const RangeQuestion = ({ setTempPoints, qNumber, setEnable, options}) => {
    const changePoints = (points) => {
        let p = [0, 0, 0, 0, 0];
        let left = options[0].casa
        let right = options[1].casa
        p[left] = points[0];
        p[right] = points[1];
        setEnable(true);
        setTempPoints(p);
    }

    return (
        <div className="RangeAnswer">
            <div className='options'>
                <RadioOpc onClick={()=>changePoints([ 2,-1])} qNumber={qNumber} />
                <RadioOpc onClick={()=>changePoints([ 1, 0])} qNumber={qNumber} />
                <RadioOpc onClick={()=>changePoints([ 0, 0])} qNumber={qNumber} />
                <RadioOpc onClick={()=>changePoints([ 0, 1])} qNumber={qNumber} />
                <RadioOpc onClick={()=>changePoints([-1, 2])} qNumber={qNumber} />
            </div>
            <div className='options'>
                <p>{options[0].text}</p>
                <p>{options[1].text}</p>
            </div>
        </div>
    )
}

const MultiQuestion = ({setTempPoints, qNumber, setEnable, options}) => {
    const changePoints = (points) => {
        setTempPoints(points);
        setEnable(true);
    }

    return (
        <div className='MultiQuestion'>
            {
                options.map(( option, i) => 
                    <MultiOpc  option={option} key={i} onClick={()=>changePoints(option.points)} qNumber={qNumber}/>
                )
            }
        </div>
    )
}