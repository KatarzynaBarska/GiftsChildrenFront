import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {GiftsView} from "./views/GiftsView";
import {ChildView} from "./views/ChildView";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";
import {SingleGiftView} from "./views/SingleGiftView";

//1.Standardowy routing
// export const App = () => {
//     return (
//         <div className="App">
//             <GiftsView/>
//         </div>
//     )};
//  }

//2.Routing z biblioteką React Router
export const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                {/*/!*<Route path="*" element={<MainView/>} />*!/ @TODO dorobić widok MainView*/}
                <Route path="/gift" element={<GiftsView/>}/>
                <Route path="/gift/:idOfGift" element={<SingleGiftView/>}/>
                <Route path="/child" element={<ChildView/>}/>
                <Route path="notfound" element={<NotFoundView/>}/>
            </Routes>
        </>

    );
}



