import React from 'react';
import Card from './Card';
import { Robots } from './Robots';

const CardList = ({ robots }) => {
    return (
        <div> 
        {
            Robots.map((user, i) => {
                {/*NB:  
                    index.js:1446 Warning: Each child in an array or iterator should have a unique "key" prop.
                    See https://fb.me/react-warning-keys for more information
                */}
                return (<Card 
                        key={i} 
                        id={Robots[i].id} 
                        name={Robots[i].name} 
                        email={Robots[i].email}/>
                );
            })
        }   
        </div>
    );
}

export default CardList;

