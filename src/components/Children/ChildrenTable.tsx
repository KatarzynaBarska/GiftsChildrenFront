import React from 'react';
import {ChildEntity, GiftEntity} from '../../../../Backend/types';
import {ChildrenTableRow} from "./ChildrenTableRow";


interface Props {
    giftsList: GiftEntity[];
    childrenList: ChildEntity[];
}

export const ChildrenTable = (props: Props) => (

    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Gift</th>
        </tr>
        </thead>
        <tbody>

        {
            props.childrenList.map(child => (
                <ChildrenTableRow
                    child={child}
                    key={child.id}
                    giftsList={props.giftsList}

                />

            ))

        }

        </tbody>
    </table>

);
