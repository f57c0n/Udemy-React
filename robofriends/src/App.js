import React, {Component} from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { Robots } from './Robots';

class App extends Component {
    constructor() {
        super()
        this.state={
            robots: Robots,
            searchfield: ''
        }
    }
    /*NB:  target.value takes the search input value from where onSearchChange is called [SearchBox.onchange]
            remember: onSearchChange is user-defined funtion => must follow function format*/

    onSearchChange = (event) => {
        console.log(event.target.value);
        {/*filter => predefine function in array*/}
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
    }

    render () {
        return(
            <div className='tc'>
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;