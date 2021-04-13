import React from 'react'
import BodyHead from './bodyHead';
import Titlebox from './titleBox';

class Body extends React.Component {
    render(){
        return(
            <div>
                <BodyHead></BodyHead>
                <Titlebox></Titlebox>
            </div>
        )
    }
}

export default Body;