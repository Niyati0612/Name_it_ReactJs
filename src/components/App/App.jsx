import React from 'react'
import './App.css'
import Search from '../Search/Search';
import Header from './../Header/Header';
import Results from '../ResultsContainer/ResultsContainer';
import { useState } from 'react'

const name = require('@rstacruz/startup-name-generator');
const App = () => {

    const [headerText,setHeaderText]=useState("NameIt");
    const [headerexpanded,setHeaderExpanded]=useState(true);
    const [suggestedNames,setSuggestNames]=useState([]);
    
    const handelInputChange = (inputtext) =>{
        setSuggestNames(inputtext? name(inputtext): []);
        setHeaderExpanded(!inputtext);

    };

    return (
        <div>
            <Header 
                headerexpanded={headerexpanded}
                headerTitle={headerText}/>
            <Search onInputChange={handelInputChange}/>
            <Results suggestedNames={suggestedNames}/>
        </div>
    )

}

// without use of react hooks
/* class App extends React.Component{
    constructor(){
        super();

        this.state={
            headerText : "Hello",
            headerexpanded:true,
            suggestedNames:[],
        };
}
    handelInputChange = (inputtext) =>{
        this.setState({ 
            headerexpanded: !inputtext,
            suggestedNames:name(inputtext),
    });
    };
    render(){

        return (
            <div>
                <Header 
                    headerexpanded={this.state.headerexpanded}
                    headerTitle={this.state.headerText}/>
                <Search onInputChange={this.handelInputChange}/>
                <Results suggestedNames={this.state.suggestedNames}/>
            </div>
        )
    };
    } */

// connecting to header file and adding state
/* class App extends React.Component{
    state={
        headerText : "Hello"
    }
    render(){
        return (
            <div>
                <Header/>
                <h2>{this.state.headerText}</h2>
            </div>
        )
    };
    }; */

    // class component - js class that have react component and a render method which returns html or jsx
/* class App extends React.Component{
render(){
    return <h1>Component Function(class example)</h1>
}
} */

// function component-written using js function which returns html or jsx value """
/* function App(){
    return <h1>Component Function(function example)</h1>
} */
export default App;