import React from "react";
import {NavLink} from "react-router-dom";

import "./HomePage.css";


export const HomePage = () => {
    return (
        <>
            <div className="mainView">
                <h1>My Gifts App - strona główna</h1>
                <NavLink className="mainView_link" to="/child">Zapraszamy!</NavLink >
            </div>
        </>
    )
}