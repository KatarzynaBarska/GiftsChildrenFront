import {useEffect, useState} from "react";

export const Clock = () => {
    const  [dt, setDt]  = useState(new Date());

    useEffect( () => {
        setDt(new Date());
    }, [dt]);

    return <p>{dt.toLocaleString()}</p>

}