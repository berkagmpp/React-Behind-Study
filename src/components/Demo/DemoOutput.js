import React from 'react';

const DemoOutput = props => {
    console.log('DemoOutput running: every state change entire re-executed, re-evaluated.')
    // this message always appeared in console with App's message because props changed every click
    // but, actually props values does NOT matter for re-eval, re-exc.
    // just fact of parent changed.

    return <p>{props.show ? 'This is new' : ''}</p>
};

// export default DemoOutput;
export default React.memo(DemoOutput);
// React.memo(component): 
// if the parent component change, 
// but, the props values for that this component did not change,
// this component excution will be skipped.