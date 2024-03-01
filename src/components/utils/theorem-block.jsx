import * as React from 'react';

function TheoremBlock(props) { 
    if(props.link == undefined){
        return (
            <p><b><u>{props.title}</u></b> {props.children}</p>
            )
    }

    return (
        <p>
            <a href={props.link}><b><u>{props.title}</u></b></a> {props.children}
        </p>
)
    
}

export default TheoremBlock;