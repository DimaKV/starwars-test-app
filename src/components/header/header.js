import React from 'react';
import './header.css';

import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 logo-row">                       
                        <Link className="logo" to = '/'> StarWars App </Link>
                    </div>
                    <div className="col-sm-8">
                        <nav className="topmenu">
                            <ul>
                                <li><Link to = '/people/'>People</Link></li>
                                <li><Link to = '/planets/'>Planets</Link></li>
                                <li><Link to = '/starships/'>Starships</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;