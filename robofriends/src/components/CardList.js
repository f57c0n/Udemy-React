import React from 'react';
import Card from './Card';

//make sure that the props (theRobots) are exactly the same name as when it was passed when the function was called.  
const CardList = ({ theRobots }) => {
    return (
        <div> 
        {
            theRobots.map((user, i) => {
                /*NB:  
                    index.js:1446 Warning: Each child in an array or iterator should have a unique "key" prop.
                    See https://fb.me/react-warning-keys for more information
                */
                return (<Card 
                        key={i} 
                        id={theRobots[i].id} 
                        name={theRobots[i].name} 
                        email={theRobots[i].email}/>
                );
            })
        }   
        </div>
    );
}

export default CardList;

