import React from 'react';
import {GiftEntity} from '../../../../Backend/types';
import {GiftTableRow} from "./GiftTableRow";

interface Props {
    gifts: GiftEntity[];
    onGiftsChange: () => void;
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>
                Name
            </th>
            <th>
                Count
            </th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            props.gifts.map(gift => (
                <GiftTableRow
                    gift={gift}
                    key={gift.id}
                    onGiftsChange={props.onGiftsChange}/>
                ))
        }
        </tbody>
    </table>
);
