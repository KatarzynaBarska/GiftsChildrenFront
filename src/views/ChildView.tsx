import React from 'react';
import {ChildrenList} from "../components/Children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";
import {Header} from "../components/Header/Header";

export const ChildView = () => (
    <>
        <Header/>
        <ChildrenList/>
        <AddChild/>
    </>

);


