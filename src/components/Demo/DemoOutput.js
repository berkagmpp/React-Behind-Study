import React from 'react';

const DemoOutput = props => {
    console.log('DemoOutput running: every state change entire re-executed, re-evaluated.')
    // this message always appeared in console with App's message because props changed every click
    // but, actually props values does NOT matter for re-eval, re-exc.
    // just fact of parent changed.
    // after adding React.memo(), this message appeared once only start

    return <p>{props.show ? 'This is new' : ''}</p>
};

// export default DemoOutput;
export default React.memo(DemoOutput);
// React.memo(component): 
// if the parent component change, 
// but, the props values for that this component did not change,
// this component excution will be skipped.

// <DemoOutput show={false} /> in App.js (Paren000000t)
// React.memo(DemoOutput; in DemoOutput.js (Child)
// these are used for optimising that avoids this unnecessary rendering

// React.memo(component) has cost:
// if have a huge component tree and a lot of child components, memo will be worth it.