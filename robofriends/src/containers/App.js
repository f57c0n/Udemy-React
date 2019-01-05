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

// parameter state comes from index.js <provider store> state(rootReducers)
// note that all the variables inside here are variables with states from reducers (they change values)
const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component {
  //constructor not needed anymore.  initialization managed by redux  
  //constructor() {
        //super()
        //this.state={
            //robots: []
            //searchField: '' => move to mapStateToProps
        //}
    //}
    
    /*NB:   using json placeholder to fetch "actual" 
            this.props.store => after creating the store in index.js => getState is built-in
            remember that fetch here uses API and is async => to use redux, need to download redux-thunk among others
    */
    componentDidMount() {
        // console.log(this.props.store.getState()) => to check what it does
        // move 3 statements below to action
        // fetch('https://jsonplaceholder.typicode.com/users')
        //  .then(response=> response.json())
        //  .then(users => {this.setState({ robots: users})});
        this.props.onRequestRobots();
      }


    /*NB:  target.value takes the search input value from where onSearchChange is called [SearchBox.onchange]
            remember: onSearchChange is user-defined funtion => must follow function format

    onSearchChange = (event) => {
        /* setState => like in Java, setting the value for searchfield
        this.setState({searchField: event.target.value})
    }  REMOVE CAUSE IT IS NOW IN mapDispatchToProps
    */

    render() {

      //const { robots } = this.state; => now in redux
      // this.props because these fields are now in redux
      const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
          return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // !robots.length => means that if robots not empty since 0 is false
        // also remember if-then-else => condition ? true : false format 
        return !robots.length ?
          <h1>Loading</h1> :
          (
            /* remember to use the same variable names being passed on the actual function called */
            <div className='tc'>
              <h1 className='f1'>RoboFriends</h1>
              <SearchBox searchChange={onSearchChange}/>
              <Scroll>
                <ErrorBoundary>
                  <CardList theRobots={filteredRobots} />
                </ErrorBoundary>
              </Scroll>
            </div>
          );
      }
    }

// action done from mapDispatchToProps will channge state from mapStateToProps
// connect is higher order function => returns a function
// this command allows App to subscribe/connect to the redux store.  any state changes there will take effect in App
// export default connect()(App)
export default connect(mapStateToProps, mapDispatchToProps)(App)