import React from 'react';
import './header.css';

const Header = () => {
    return(
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 logo-row">
                        <a href="#" className="logo">StarWars App</a>
                    </div>
                    <div className="col-sm-8">
                        <nav className="topmenu">
                            <ul>
                                <li><a href="#">People</a></li>
                                <li><a href="#">Planets</a></li>
                                <li><a href="#">Starships</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;