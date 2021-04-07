import React from 'react';
import '../../style/body/body.scss';
import dragon from './dragon.jpg'

class Body extends React.Component {
    render(){
        return(
            <div className="body">
                <img src={dragon} alt="dragon"></img>
            </div>
        )
    }
}

export default Body;