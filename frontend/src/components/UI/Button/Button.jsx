import React from 'react';

const Button = (props) => {
    return (
        <button className={'btn ' + props.classBtn} >
            {props.children}
        </button>
    );
};

export default Button;