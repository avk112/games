import React from 'react';
import InputBlock from "./InputBlock";
import defaultGameState from "../../../data/memesGenerator/defaultGameState";

const InputsArea = () => {

    const inputsBlock = ()=> {
        let array=[];
        let i=1;
        while (i <= defaultGameState.linesNumber){
            array.push(<InputBlock
                            key={i}
                            inputId={i}
                        />);
            i++;
        }
        return array;
    };


    return (
        <>
            {inputsBlock()}
        </>
    );
};

export default InputsArea;