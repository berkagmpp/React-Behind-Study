import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log('App running: every state change entire re-executed, re-evaluated.')
    // this message always appeared in console because DemeOutput state is in App.js -> re-eval, re-exc

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph(prevShowParagraph => !prevShowParagraph); // clean way to set oposit state
        };
    }, [allowToggle]); 

    const allowToggleHandler = () => {
        setAllowToggle(true);
    }; 

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph} /> 
            <Button onClick={toggleParagraphHandler}>Allow Toggling!</Button>
            <Button onClick={allowToggleHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
