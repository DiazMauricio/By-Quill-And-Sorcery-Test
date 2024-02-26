import { Ramcaster, Vicroft, Fanginor, Blazemont, Blackwood } from "../assets/IconosCasas";
import "./Result.css"

const results = [
    {
        "icon": Ramcaster,
        "title": "Ramcaster",
        "subtitle": "Competencia & Desarrollo",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta aliquam perferendis doloremque ipsam modi molestias voluptatibus, commodi reprehenderit quibusdam minus hic harum numquam. Quaerat eaque eos placeat itaque harum!",
        "colors": ["#220C0C", "#A03628"]
    },
    {
        "icon": Vicroft,
        "title": "Vicroft",
        "subtitle": "Saber & Perfección",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta aliquam perferendis doloremque ipsam modi molestias voluptatibus, commodi reprehenderit quibusdam minus hic harum numquam. Quaerat eaque eos placeat itaque harum!",
        "colors": ["#1C1F28", "#C4A041"]
    },
    {
        "icon": Fanginor,
        "title": "Fanginor",
        "subtitle": "Justicia & Unidad",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta aliquam perferendis doloremque ipsam modi molestias voluptatibus, commodi reprehenderit quibusdam minus hic harum numquam. Quaerat eaque eos placeat itaque harum!",
        "colors": ["#261E1A", "#527C9A"]
    },
    {
        "icon": Blazemont,
        "title": "Blazemont",
        "subtitle": "Libertad & ambición",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta aliquam perferendis doloremque ipsam modi molestias voluptatibus, commodi reprehenderit quibusdam minus hic harum numquam. Quaerat eaque eos placeat itaque harum!",
        "colors": ["#122525", "#A05B7C"]
    },
    {
        "icon": Blackwood,
        "title": "Blackwood",
        "subtitle": "Verdad & Resiliencia",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore soluta aliquam perferendis doloremque ipsam modi molestias voluptatibus, commodi reprehenderit quibusdam minus hic harum numquam. Quaerat eaque eos placeat itaque harum!",
        "colors": ["#262429", "#808A40"]
    }
]


const Result = ({restart, points, changeColors}) => {

    const calcResult = () => {
        let maxAt = 0;

        for (let i = 0; i < points.length; i++) {
            maxAt = points[i] > points[maxAt] ? i : maxAt;
        }
        return maxAt;
    }
    const calcPorcentage = (position) => {
        let min = Math.min(...points);
        let arr = points;
        
        for (let i = 0; i < arr.length; i++) {
            arr[i] -= min;
        }
        let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
        return Math.floor((100/sum) * (arr[position])) + "%"
    }
    
    changeColors(results[calcResult()].colors)
    return ( 
        <div className="Result">
            {results[calcResult()].icon()}
            <div className="Info">
                <h1>{results[calcResult()].title}</h1>
                <h2>{results[calcResult()].subtitle}</h2>
                <p>{results[calcResult()].text}</p>
            </div>
            <div className="Houses">
                <div>
                    <Ramcaster/>
                    <p>{calcPorcentage(0)}</p>
                </div>
                <div>
                    <Vicroft/>
                    <p>{calcPorcentage(1)}</p>
                </div>
                <div>
                    <Fanginor/>
                    <p>{calcPorcentage(2)}</p>
                </div>
                <div>
                    <Blazemont/>
                    <p>{calcPorcentage(3)}</p>
                </div>
                <div>
                    <Blackwood/>
                    <p>{calcPorcentage(4)}</p>
                </div>
            </div>
            <button onClick={restart}>reiniciar</button>
        </div>
     );
}
 
export default Result;