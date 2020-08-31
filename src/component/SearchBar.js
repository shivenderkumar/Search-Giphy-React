import React from 'react';

export function SearchBar(props){
    return(
        <div className='form-group'>
            <input onChange={props.takeInput} type="text" placeholder="search giphy here" className='form-control'/>&nbsp;&nbsp;
            <button onClick={props.searchNow} className='btn btn-primary'>Search</button>
        </div>
    );
}