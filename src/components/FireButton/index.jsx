import { useState, useContext} from "react";
import {motion} from "framer-motion";
import "./index.css"
import FlameContext from "../../FlameContext";


const FireButton = () => {

    const [opaState, opaSetstate] = useState(100)
    const {active, setActive} = useContext(FlameContext)

    const fayah = () => {
        opaSetstate(opaState => opaState - 1)
        if(opaState <= 0){
           setActive()
        }
           
    }

    return (
        <div className="button-wrapper">
        <div className="overlay" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${opaState}%, 0 ${opaState}%)`}}/>
        <motion.button
            className="fireButton"
            onClick={fayah}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            disabled={active?false:true}
        >
        </motion.button>
        </div>
    )
}



export default FireButton;