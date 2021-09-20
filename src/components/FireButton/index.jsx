import { useState } from "react";
import {motion} from "framer-motion";
import "./index.css"


const FireButton = () => {

    const [opaState, opaSetstate] = useState(100)

    const fayah = () => {
        opaSetstate(opaState => opaState - 1)
    }

    return (
        <div className="button-wrapper">
        <div className="overlay" style={{ clipPath: `polygon(0 0, 100% 0, 100% ${opaState}%, 0 ${opaState}%)`}}/>
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