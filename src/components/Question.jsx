import './Question.css';

//  COMPONENT EXPORT DEFAULT.
const Question = ({question, clickOptions, name}) => {

    let rangeQuestion = question?.options.length === 2 && name !== "Tie";
    return ( 
        <>
            {
                rangeQuestion? 
                    <RangeQuestion question={question} clickOptions={clickOptions} name={name} />
                : 
                    <MultiQuestion question={question} clickOptions={clickOptions} name={name} />
            }
        </>
    );
}
export default Question;

//  OPTIONS.
const RadioOpc = ({name, onClick}) => {
    return (
        <label className="answer" onClick={onClick}>
            <input type="radio" name={name}/>
            <span className="option"/>
        </label>
    )
}

const MultiOpc = ({name, option, onClick}) => {
    return (
        <label className="answer" onClick={onClick}>
            <input type="radio" name={name}/>
            <span className="option"> {option.text} </span>
        </label>
    )
}

//  OPTIONS CONTAINER.
const RangeQuestion = ({ clickOptions, question, name}) => {
    const changePoints = (points) => {
        let p = [0, 0, 0, 0, 0];
        let left = question.options[0].casa
        let right = question.options[1].casa
        p[left] = points[0];
        p[right] = points[1];
        clickOptions(p);
    }

    return (
        <>
            <p className='RangeQuestion-Title' >{question?.text}</p>
            <div className="RangeAnswer">
                <div className='options'>
                    <RadioOpc onClick={()=>changePoints([ 2,-1])} name={name} />
                    <RadioOpc onClick={()=>changePoints([ 1, 0])} name={name} />
                    <RadioOpc onClick={()=>changePoints([ 0, 0])} name={name} />
                    <RadioOpc onClick={()=>changePoints([ 0, 1])} name={name} />
                    <RadioOpc onClick={()=>changePoints([-1, 2])} name={name} />
                </div>
                <div className='options'>
                    <p>{question.options[0].text}</p>
                    <p>{question.options[1].text}</p>
                </div>
            </div>
        </>
    )
}

const MultiQuestion = ({clickOptions, name, question}) => {
    return (
        <>
        <p className='MultiQuestion-Title' >{question.text}</p>
        <div className='MultiAnswer'>
            {
                question.options.map(( option, i) => 
                    <MultiOpc  option={option} key={i} onClick={()=>clickOptions(option.points)} name={name}/>
                )
            }
        </div>
        </>
    )
}