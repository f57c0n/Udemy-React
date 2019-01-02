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
                <h1>ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Robots={filteredRobots}/>
            </div>
        );
    }
}

export default App;