import { useState, useEffect, useContext } from "react"
import FlameContext from "../../FlameContext";
import "./index.css"

const Quote = () => {

    const [text, setText] = useState("FusianFire")

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const quotes = ["You are funny", "You are intelligent", "You are cute", "You are wholesome", "You are cringe", "You are very important to me"]
    
    const {active} = useContext(FlameContext)

    let interval = null;

    useEffect(() => {
        if (active) {
          interval = setInterval(() => {
            setText(quotes[getRandomInt(quotes.length)]);
          }, 1);
        }  
        return () => clearInterval(interval)
    }, [active, text]);


    return (
        <div className="text-wrapper">
            <p>{text}</p>
        </div>
    )
}

export default Quote;