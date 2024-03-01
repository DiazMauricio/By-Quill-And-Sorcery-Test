import './Question.css';

//  COMPONENT EXPORT DEFAULT.
const Question = ({question, clickOptions, qNumber}) => {

    return ( 
        <div className='Question'>
            <p>{question.text}</p>
            {
                question.options.length === 2 && qNumber !== "Tie"? 
                    <RangeQuestion options={question.options} clickOptions={clickOptions} name={qNumber} />
                : 
                    <MultiQuestion options={question.options} clickOptions={clickOptions} name={qNumber} />
            }
        </div>
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
const RangeQuestion = ({ clickOptions, options, name}) => {
    const changePoints = (points) => {
        let p = [0, 0, 0, 0, 0];
        let left = options[0].casa
        let right = options[1].casa
        p[left] = points[0];
        p[right] = points[1];
        clickOptions(p);
    }

    return (
        <div className="RangeAnswer">
            <div className='options'>
                <RadioOpc onClick={()=>changePoints([ 2,-1])} name={name} />
                <RadioOpc onClick={()=>changePoints([ 1, 0])} name={name} />
                <RadioOpc onClick={()=>changePoints([ 0, 0])} name={name} />
                <RadioOpc onClick={()=>changePoints([ 0, 1])} name={name} />
                <RadioOpc onClick={()=>changePoints([-1, 2])} name={name} />
            </div>
            <div className='options'>
                <p>{options[0].text}</p>
                <p>{options[1].text}</p>
            </div>
        </div>
    )
}

const MultiQuestion = ({clickOptions, name, options}) => {
    return (
        <div className='MultiQuestion'>
            {
                options.map(( option, i) => 
                    <MultiOpc  option={option} key={i} onClick={()=>clickOptions(option.points)} name={name}/>
                )
            }
        </div>
    )
}