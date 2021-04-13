import React from 'react';
import dragon from './dragon.jpg'
import '../../style/body/bodyHead.scss';

class BodyHead extends React.Component {
    titleHead(){
        return("Dit is een titel!");
    }

    render(){
        return(
            <div className="body">
                <img src={dragon} alt="dragon"></img>
                <p>{this.titleHead()}</p>
            </div>
        )
    }
}

export default BodyHead;