import React from 'react';
import classes from "./LoginForm.module.scss";
import MyButton from "../../UI/buttons/MyButton";

const LoginForm = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.submitForm}>
             <input
                className={classes.loginForm__input}
                type="text"
                name="userName"
                maxLength={10}
                required={true}
                placeholder="Enter your login name"
                value={props.inputData.userName}
                onChange={props.handleInputData}
            />
            {props.userEmailField &&
                <input
                    className={classes.loginForm__input}
                    type="email"
                    name="userEmail"
                    required={true}
                    placeholder="Enter your e-mail"
                    value={props.inputData.userEmail}
                    onChange={props.handleInputData}
                />}
            {props.userPasswordField &&
                <input
                    className={classes.loginForm__input}
                    type="password"
                    name="userPassword"
                    placeholder="Enter your password"
                    value={props.inputData.userPassword}
                    onChange={props.handleInputData}
                />
            }
            <MyButton text="Submit"/>
        </form>
    );
};

export default LoginForm;