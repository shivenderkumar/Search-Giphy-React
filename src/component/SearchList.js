import React from 'react';
import { Picture } from './Picture';
 
export const Searchlist=(props)=>{
    console.log("SearchList is called!!");
    let totalimagedata = props.imagedata.length;
    console.log("Imagedata Length :",totalimagedata);

    let noRecordJSX=()=>(<p>No Record Found!!</p>);

    let succesJSX=()=>{
        return(
            <>
            <p>List of Records!! {totalimagedata} </p>
            { props.imagedata.map(ele=><Picture key={ele.id} url={ele.images.original.url}/>) }
            </>
        );
    }

    return(
        <div>
            <h2>Result List</h2>
            { totalimagedata > 0? succesJSX() : noRecordJSX() }        
        </div>
    );
}