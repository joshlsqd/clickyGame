import React from 'react';

const AppBar = ({score, topScore}) => (
    <nav>
        <div className="nav-wrapper blue">
            <a href="" className="brand-logo">Clicky App</a>
            <ul id="nav-mobile" className="right">
                <li><a href="">Score: {score}</a></li>
                <li><a href="">Topscore: {topScore}</a></li>
            </ul>
        </div>
    </nav>

);

export default AppBar;