import React from 'react';
import classes from "./InputBlock.module.scss";
import upFontImg from "../../../image/memeGenerator/increase-font-size.png";
import downFontImg from "../../../image/memeGenerator/decrease-font-size.png";
import {useDispatch, useSelector} from "react-redux";
import {changeSize, changeText} from "../../../redux/memeGenerator/linesSlice";

const InputBlock = ({inputId}) => {
    const text = useSelector(state=>state.memesLines[inputId].text);
    const dispatch = useDispatch();


    const handleInput = (event)=> {
        const newText = event.target.value;
        dispatch(changeText({text: newText, id:inputId}));
    }

    const changeTextSize = (iterate)=> {
        dispatch(changeSize({id: inputId, number: iterate}));
    }


    return (
            <div className={classes.inputBlock}>
                <input
                    className={classes.inputBlock__input}
                    value={text}
                    placeholder="Enter text"
                    onChange={handleInput}
                />
                <img src={upFontImg}
                     onClick={()=>changeTextSize( 1)}
                     title="Upsize font"
                     className={classes.inputBlock__img}
                />
                <img src={downFontImg}
                     onClick={()=>changeTextSize(-1)}
                     title="Downsize font"
                     className={classes.inputBlock__img}
                />
            </div>
    )
};

export default InputBlock;