import React, {useState} from "react";
import LoginForm from "./LoginForm";
import {useDispatch} from "react-redux";
import {addUser} from "../../../redux/user";


const LoginPage = ()=> {
    const dispatch = useDispatch();
    const user = {
        userName: "",
        userPassword: "",
        userEmail: "",
        registered: true

    }

    const [inputData, setInputData] = useState(user)

    const handleInputData = (event)=> {
        setInputData((prevData)=>{
            return {...prevData,
                    [event.target.name]: event.target.value}
        })
    }
    const submitForm = (event)=> {
        event.preventDefault();
        localStorage.setItem("userData", JSON.stringify(inputData));
        dispatch(addUser());
        setInputData(user);
    }


    return (
        <div className={'gamePage'}>
            <LoginForm
                inputData={inputData}
                handleInputData={(e)=>handleInputData(e)}
                submitForm = {(e)=>submitForm(e)}
                userEmailField={true}
                userPasswordField={true}
            />
        </div>
    )
}

export default  LoginPage;