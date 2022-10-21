import React from 'react';
import MyButton from "./UI/buttons/MyButton";

const MyForm = (props) => {
    return (
        <form className="login--form" onSubmit={props.submitForm}>
             <input
                className="login--form--input"
                type="text"
                name="userName"
                required={true}
                placeholder="Enter your login name"
                value={props.inputData.userName}
                onChange={props.handleInputData}
            />
            {props.userEmailField &&
                <input
                    className="login--form--input"
                    type="email"
                    name="userEmail"
                    required={true}
                    placeholder="Enter your e-mail"
                    value={props.inputData.userEmail}
                    onChange={props.handleInputData}
                />}
            {props.userPasswordField &&
                <input
                className="login--form--input"
                type="password"
                name="userPassword"
                placeholder="Enter your password"
                value={props.inputData.userPassword}
                onChange={props.handleInputData}
            />}
            <MyButton text="Submit"/>
        </form>
    );
};

export default MyForm;