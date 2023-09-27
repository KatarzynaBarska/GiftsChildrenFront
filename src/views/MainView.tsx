import React from 'react';
import {NavLink} from "react-router-dom";
export const MainView = () => {
    return (
        <>
            <div className="mainView">
                <h1>My Gifts App - strona główna</h1>
                Menu: <NavLink to="/child">Zapraszamy!</NavLink >
            </div>
        </>
    );
}
