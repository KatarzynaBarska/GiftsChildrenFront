import React from 'react';
import {NavLink} from "react-router-dom";
import prezentHeader from '../../Assets/prezentHeader.png';

import './Header.css';

export const Header = () => {
    const colorOfLink = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'})
    return (
        <>
            <div className="container">
                <img src={prezentHeader} alt="prezent"/>
                <div className="container_header">
                    <h1>My Gifts App</h1>
                    Menu: <NavLink style={colorOfLink}
                                   to="/gift">Gifts</NavLink> | <NavLink
                    style={colorOfLink} to="/child">Children</NavLink>
                </div>
            </div>

        </>
    );
};
