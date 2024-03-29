import "./Result.css";


const Result = ({restart, children, winner}) => {
    return ( 
        <div className="Result">
            {winner.icon()}
            <div className="Info">
                <div>
                    <h1>{winner.title}</h1>
                    <h2>{winner.subtitle}</h2>
                </div>
                {winner.text()}
            </div>
                {children}            
            <button onClick={restart}>reiniciar</button>
            <footer>By Diaz J. Mauricio</footer>
        </div>
     );
}
 
export default Result;