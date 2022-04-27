import React, { useState } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';

function App() {
    const [showParagraph, setShoeParagraph] = useState(false);

    console.log('App running: every state change entire re-excuted, re-evaluated.')

    const toggleParagraphHandler = event => {
        setShoeParagraph(prevShowParagraph => !prevShowParagraph);  // clean way to set oposit state
    };

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
