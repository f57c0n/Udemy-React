//https://reactjs.org/docs/react-component.html
//list of life-cyle methods within react

import React, {Component} from 'react';
import './App.css';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
//import { Robots } from './Robots';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    /*NB:   using json placeholder to fetch "actual" */
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response=> response.json())
          .then(users => {this.setState({ robots: users})});
      }

    /*NB:  target.value takes the search input value from where onSearchChange is called [SearchBox.onchange]
            remember: onSearchChange is user-defined funtion => must follow function format*/

    onSearchChange = (event) => {
        {/*setState => like in Java, setting the value for searchfield*/}
        this.setState({searchfield: event.target.value})
    }

    render () {
        {/*filter => predefine function in array to filter based on return condition*/}
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className='tc'>
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }
}

export default App;