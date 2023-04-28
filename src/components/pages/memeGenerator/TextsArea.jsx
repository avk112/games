import React from 'react';
import TextBlock from "./TextBlock";
import defaultGameState from "../../../data/memesGenerator/defaultGameState";


const TextsArea = ({myRef}) => {

    const textsBlock = ()=> {
        let array=[];
        let i=1;
        while (i<=defaultGameState.linesNumber){
            array.push(<TextBlock
                            key={i}
                            inputId={i}
                            myRef={myRef}
                         />);
            i++;
        }
        return array;
    };


    return (
        <div
            onDragOver={(e)=>e.preventDefault()}
            style={{position:"absolute",height: "100%", width:"100%"}}
        >
            {textsBlock()}
        </div>
    );
};

export default TextsArea;