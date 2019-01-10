import React, { Component } from 'react';
import { robots } from '../robots';
import Lisst from '../Components/Cardlist';
import Search from '../Components/Searchbar';
import './App.css';

class App extends Component {
 
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  } 

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }
 
  componentWillMount(){
    this.setState({robots : robots})
  }

  render() {
   const filteredRobots = this.state.robots.filter(robots =>{
      return robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase())
      }
    );
   return (
     <div className="tc" >
       <h1 className="heading f1">ROBO BackBenchers</h1>
       <Search searchChange = {this.onSearchChange}/>  
       <Lisst robotsprop = {filteredRobots} />
     </div>
    );
  }
}

export default App;