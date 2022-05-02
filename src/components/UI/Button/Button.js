import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
    console.log('Button running: every state change entire re-executed, re-evaluated.');
    // this message always appeared in console with App's message because props changed every click
    // after useCallback() onClick fn in App.js, and adding React.memo(),this message never appeared
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default React.memo(Button);
