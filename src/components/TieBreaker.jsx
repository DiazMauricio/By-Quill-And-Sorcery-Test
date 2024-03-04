import { DefaultTieBreaker } from "../QuestionsArray";


const TieBreaker = ({points, clickOptions}) => {

      const checkTie = (p) => {
        let indices = [];
        let element = Math.max(...p);
        let idx = p.indexOf(element);
        while (idx != -1) {
        indices.push(idx);
        idx = p.indexOf(element, idx + 1);
        }
        return indices;
    }

    return ( 
        <>
            <p>{DefaultTieBreaker.text}</p>
            <div className='MultiQuestion'>
                {
                    DefaultTieBreaker.options.map(( option, i) => {
                        if (checkTie(points).includes(i)){
                        return (
                            <label className="answer" onClick={()=>clickOptions(option.points)} key={i}>
                                <input type="radio" name={"tie"}/>
                                <span className="option"> {option.text} </span>
                            </label>
                        )
                    }}
                    )
                }
            </div>
        </>
     );
}
 
export default TieBreaker;

