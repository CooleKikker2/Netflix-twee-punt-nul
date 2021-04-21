import React from 'react';
import '../../style/header/header.scss';
import logo from './logo.png';
import { BrowserRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faGift, faBell, faSortDown, faUsers } from '@fortawesome/free-solid-svg-icons';



//Class header returns the header for the webpage
class Header extends React.Component{







    //Render function for class Header
    render(){
        return(
            <header>
                <div className="logo">
                    <img src={logo} alt="Logo" />  
                </div>
                <ul>
                    <BrowserRouter>
                        <li><Link to="/">Homepagina</Link></li>
                        <li><Link to="/series">Series</Link></li>
                        <li><Link to="/films">Films</Link></li>
                        <li><Link to="/nieuw">Nieuw en populair</Link></li>
                        <li><Link to="/lijst">Mijn Lijst</Link></li>
                    </BrowserRouter>
                    <div className="icon">
                    <BrowserRouter>
                        <li><Link to="#"><FontAwesomeIcon icon={faSearch} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faGift} /></Link></li>
                        <li><Link to="#"><FontAwesomeIcon icon={faBell} /></Link></li>
                        <ul>
                            <div className="profile">
                                <li><Link to="#"><FontAwesomeIcon icon={faUsers} /></Link></li>
                                <li><Link to="#"><FontAwesomeIcon icon={faSortDown} /></Link></li>
                            </div>
                        </ul>
                        
                    </BrowserRouter>
                    </div>
                </ul>
            </header>
        )
    }
}

export default Header;