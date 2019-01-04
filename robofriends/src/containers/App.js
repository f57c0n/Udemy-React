//https://reactjs.org/docs/react-component.html
//list of life-cyle methods within react

import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
//import { Robots } from './Robots';

import './App.css';

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
        /* setState => like in Java, setting the value for searchfield*/
        this.setState({searchfield: event.target.value})
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        /* !robots.length => means that if robots not empty since 0 is false*/
        /* also remember if-then-else => condition ? true : false format */
        return !robots.length ?
          <h1>Loading</h1> :
          (
            /* remember to use the same variable names being passed on the actual function called */
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList theRobots={filteredRobots} />
                </ErrorBoundary>
              </Scroll>
            </div>
          );
      }
    }

export default App;