import React from 'react';
import dragon from './dragon.jpg'
import '../../style/body/bodyHead.scss';

class BodyHead extends React.Component {
    titleHead(){
        return("Dit is de eerste filmtitel!");
    }

    render(){
        return(
            <div className="body">
                <div className="bodyImage"><img src={dragon} alt="dragon"></img></div>
                <div className="bodyTitle">
                    <p>{this.titleHead()}</p>
                </div>
            </div>
        )
    }
}

export default BodyHead;