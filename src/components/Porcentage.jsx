import { Ramcaster, Vicroft, Fanginor, Blazemont, Blackwood } from "../assets/IconosCasas";
import "./Porcentage.css";
import { motion } from 'framer-motion';


const Porcentage = ({points}) => {
    const calcPorcentage = (position) => {
        let min = Math.min(...points);
        let arr = points;

        for (let i = 0; i < arr.length; i++) {
            arr[i] -= min;
        }
        let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
        return Math.floor((100/sum) * (arr[position]))
    }
    
    return ( 
        <motion.div className="Houses"
        animate={{opacity: 1}} 
        initial={{opacity: 0}}
        transition={{duration: 0.5, delay: 1}}
        
        >
            <HousePorcentage Logo={Ramcaster} porcentage={calcPorcentage(0)}/>
            <HousePorcentage Logo={Vicroft} porcentage={calcPorcentage(1)}/>
            <HousePorcentage Logo={Fanginor} porcentage={calcPorcentage(2)}/>
            <HousePorcentage Logo={Blazemont} porcentage={calcPorcentage(3)}/>
            <HousePorcentage Logo={Blackwood} porcentage={calcPorcentage(4)}/>
        </motion.div>
     );
}
 
export default Porcentage;

const HousePorcentage = ({Logo, porcentage=0}) => {
    
    return ( 
    <div className="HousePorcentage">
        <div className="logo-container" style={{"transform":"translateY("+(5 - ((porcentage/100)*5))+"rem)"}}>
            <Logo/>
        </div>
        <div className="bar" style={{"transform":"scaleY("+(porcentage/100)+")"}}/>
        <p>{porcentage+"%"}</p>
    </div> 
    );
}
 