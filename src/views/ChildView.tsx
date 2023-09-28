import React from 'react';
import {ChildrenList} from "../components/Children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";
import {Header} from "../components/Header/Header";

import './childView.css';


export const ChildView = () => (
    <>
<div className="container_root">
    <Header/>
    <ChildrenList/>
    <AddChild/>
</div>
    </>

);


