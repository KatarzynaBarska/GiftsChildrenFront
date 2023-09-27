import React from 'react';
import {GiftsList} from "../components/Gifts/GiftsList";
import {AddGift} from "../components/AddGift/AddGift";
import {Header} from "../components/Header/Header";


export const GiftsView = () => (
    <>
        <Header/>
    <GiftsList/>
    <AddGift/>

    </>
)

