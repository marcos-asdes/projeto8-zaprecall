import React from 'react';
import StartScreen from './StartScreen.js';
import PlayScreen from './PlayScreen.js';

export default function App() {
    const [hidden,setHidden] = React.useState(false); 
    return (
        <>
            <StartScreen hidden={hidden} setHidden={setHidden} />
            <PlayScreen hidden={hidden} />
        </>
    )
}