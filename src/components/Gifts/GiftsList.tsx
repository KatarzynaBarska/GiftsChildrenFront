import React, {useEffect, useState} from 'react';
import {GiftsTable} from "./GiftsTable";
import {GiftEntity} from '../../../../Backend/types';
import {Spinner} from "../common/Spinner/Spinner";

export const GiftsList = () => {
    const [giftsList, setGiftsList] = useState<GiftEntity[] | null>(null);

    const refreshGifts = async () => {
        setGiftsList(null);
        const res = await fetch('http://localhost:3001/gift'); //sciezka do backendu
        const data = await res.json();
        setGiftsList(data.giftsList);
    };


    useEffect(() => {
            refreshGifts();
        },
        []);

    if (giftsList === null) {
        return <Spinner/>;
    }


    return <>
        <div className="container_gifts_table">
            <h1>Gifts</h1>
            <GiftsTable gifts={giftsList} onGiftsChange={refreshGifts}/>
        </div>

    </>;
};
