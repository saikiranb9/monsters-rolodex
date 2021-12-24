import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Search } from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{

constructor(){
super();
this.state = {

monsters: [],
searchField: ''
};
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(sers => this.setState({monsters:sers}));
}
handlechange = e => {this.setState({searchField: e.target.value})};
render(){
  const {monsters, searchField} = this.state;
  const filteredMons = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
return(
    <div className="App">
      <h1> Monsters Rolodex </h1>
    <Search placeholder='search monsters' handlechange={this.handlechange}/>  
    <CardList monsters = {filteredMons}/>
    </div>
  );
}
}

export default App;
