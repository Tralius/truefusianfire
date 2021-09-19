import { useState } from "react";
import {motion} from "framer-motion";
import "./index.css"


const FireButton = () => {

    const [opaState, opaSetstate] = useState(0)
    const [topState, topSetState] = useState(72)

    const fayah = () => {
        opaSetstate(opaState => opaState + 1)
        topSetState(topState => topState - 1)
    }

    return (
        <div className="button-wrapper">
        <img className="overlay" src="fire.png" alt="" style={{objectPosition: "0px "+opaState+"px", top: topState+"px"}}/>
        <motion.button
            className="fireButton"
            onClick={fayah}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
        </motion.button>
        </div>
    )
}



export default FireButton;