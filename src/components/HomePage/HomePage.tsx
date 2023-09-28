import React from "react";
import {NavLink} from "react-router-dom";

import "./HomePage.css";
import obrazekPrezentkopia from "../../Assets/obrazekPrezentkopia.png";


export const HomePage = () => {
    return (
        <>
            <div className="mainView">
                <img className="img_home" src={obrazekPrezentkopia} alt="ilumstacja prezentu" />
                <h1>My Gifts App - strona główna</h1>
                <NavLink className="mainView_link" to="/child">Zapraszamy!</NavLink >
            </div>
        </>
    )
}