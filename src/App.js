import './App.css';
import { useState } from 'react';
import FlameContext from './FlameContext';
import Appbody from './components/Appbody';


function App() {

    const [state, setstate] = useState({
        active: true,
        setActive: () => setstate(({active}) => ({
            active: !active
        }))
    })


 return (
     <FlameContext.Provider value={state}>
        <Appbody/>
     </FlameContext.Provider>
 );
}

export default App;
