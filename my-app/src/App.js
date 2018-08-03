import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


import React, { Component } from 'react';
import './App.css';
import api from './api.json';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: `${link}`,
            data: [],
            words: [],
            inputValue: '',
            unitValue: 'F'
        }
        
    }
    


    
    showWords = () => {

     }
    
    
    getData = () => {
        let url = this.state.url;
        fetch(url).then( response => {
           return response.json() 
        }).then( data => console.log(data))
	.catch( error => {
           console.log(error)
        })
    }

    
    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
           url: `${link}`,
            
        }, () => {
            this.getData();
        });
       
    }
    
    handleClick = (e) => {
        this.setState({
            unitValue: e.target.id
        });
    }
        




  render() {
    return (
      <div className="App">
		<h1>The Longest English Word</h1>		
	       <input className="form-control" placeholder="type something" onChange="this.handleChange"/>
		<button>Show results</button>      
	</div>
    );
  }
}

export default App;
