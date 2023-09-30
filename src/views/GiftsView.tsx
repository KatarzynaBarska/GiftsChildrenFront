import React from 'react';
import {GiftsList} from "../components/Gifts/GiftsList";
import {AddGift} from "../components/AddGift/AddGift";
import {Header} from "../components/Header/Header";

import './GiftsView.css';


export const GiftsView = () => (
    <>
        <div className="container_gifts">

            <Header/>
            <GiftsList/>
            <AddGift/>
        </div>

    </>
)

