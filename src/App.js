import './App.css';
import Fire from './components/Fire';
import Quote from './components/Quote';
import FireButton from './components/FireButton';

function App() {
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
 );
}

export default App;
