import React from 'react';

const DemoOutput = props => {
    console.log('DemoOutput running: every state change entire re-excuted, re-evaluated.')
    // this message always appeared in cosole with App's message because props changed every click
    // but, actually props values does NOT matter for re-eval, re-exc.

    return <p>{props.show ? 'This is new' : ''}</p>
};

export default DemoOutput;