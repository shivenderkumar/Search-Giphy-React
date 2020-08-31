import React from 'react';

export const Picture=(props)=>{
    return(
        <img src={props.url} alt="Picuture tag" className="w-25 p-3"/>
    );
}