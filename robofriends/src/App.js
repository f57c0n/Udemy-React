import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { Robots } from './Robots';

const state = {
    robots: robots,
    searchfield: ''
}


const App = () => {
    return(
        <div className='tc'>
            <h1>ROBOFRIENDS</h1>
            <SearchBox/>
            <CardList Robots={Robots}/>
        </div>
    );
}

export default App;