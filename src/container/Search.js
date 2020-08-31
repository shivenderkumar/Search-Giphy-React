import React from 'react';
import {SearchBar} from '../component/SearchBar';
import { Searchlist } from '../component/SearchList';

export default class Search extends React.Component{
    constructor(props){
        console.log("Search Constructor is called!!");
        super(props);
        this.searchtext ='';
        this.state = {imageData:[]};
    }
    componentDidMount(){
        console.log("Search ComponentDidMount is called!!");
        this.givemethedata();
    }

    givemethedata(searchname){
        let searchName = searchname;
        console.log("Search GiveMeTheData is called!!");
        const url = `https://api.giphy.com/v1/gifs/search?api_key=uUMRusJN81GirKrUoM4Ku97zPIyvJxUn&q=${searchName}&limit=5`;
        // const url = `https://api.giphy.com/v1/gifs/search?api_key=uUMRusJN81GirKrUoM4Ku97zPIyvJxUn&q=Iron%20Man&limit=5`;
        var promise = fetch(url);
        promise.then( response=>{
            var res_json = response.json();
            res_json.then(res_json_body=>{
                console.log('Response JSON Data:',res_json_body.data);
                this.setState({imageData:res_json_body.data});
            }).catch(errr=>{
                console.log('Eror Response JSON :',errr);
            });
        }).catch( err=>{
            console.log('Error in p :',err);
        });
    }

    takeinput(event){
        console.log("Take Input function is called!! Event :",event);
        let data = event.target.value;
        console.log("Data value :",data);
        this.searchtext = data;
        console.log("SearchText value :",this.searchtext);
    }

    searchNow(){
        console.log("SearchNow functoin is called!!");
        let data = this.searchtext; 
        this.givemethedata(data);
    }

    render(){
        console.log("Search Render is called!!");
        return(
            <div>
            <SearchBar takeInput={this.takeinput.bind(this)} searchNow={this.searchNow.bind(this)} />
            <Searchlist imagedata={this.state.imageData}/>
            </div>
        );
    }

}

// OLD AND DUMP NOT SMART COMPONENT
// function Search(){
//     console.log("Search is called!!");
//     return(
//         <div>
//         <SearchBar />
//         <Searchlist />
//         </div>
//     );
// }

// export default Search;

