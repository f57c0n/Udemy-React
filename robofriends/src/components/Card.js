
import React from 'react';

//instead of destructuring props after
//const Card = (props) =>
//pass the actual props instead in the function
//props = {name, email, id}
const Card = ({name, email, id}) => {
    /*NB: 
        To remove word "props" so that you don't have to use props.id for example
        const { name, email, id } = props; => replaced by parameters
        remember:   return can only have one return 
                    className vs class for tachyons packages
    */  
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>  
            {/*NB:  robohash.com => site to get random robots 
                    ?size
                    ${}
            */}
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                {/*NB:  remember: put all JSx inside {} 
                        instead of props.name bec of above const
                */} 
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div> 
    );
}

export default Card;