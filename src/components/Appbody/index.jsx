import "./index.css"
import Fire from "./../Fire"
import FireButton from "./../FireButton"
import Quote from "./../Quote"

const Appbody = () => {
    return (
    <div>
        <div  className="wrapper">
            <div className="fire-wrapper">
            <Fire/>
            <FireButton/>
        </div>
        <div>
            <Quote />
        </div>
       
        </div>
     </div>
     )
}

export default Appbody;