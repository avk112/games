import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const UseAuth = () => {
    const selector = useSelector(state=>state);
    const [isAuth, setIsAuth] = useState(selector.user.registered);



    useEffect(()=> {
          setIsAuth(selector.user.registered)

    }, [selector.user.registered])
    console.log("rendered auth");

    return (isAuth)
};

export default UseAuth;