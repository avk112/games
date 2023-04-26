import React from 'react';

const UniversalDescription = ({gameState,text, finishBreakPoint="finished", successBreakPoint="record"}) => {
    const descriptionText = ()=>{
        if(gameState[finishBreakPoint] && !gameState[successBreakPoint]){
            return text[finishBreakPoint];
        }
        if(gameState[successBreakPoint]){
            return text[successBreakPoint];
        }
        return text.intro;
    }

    return (
        <section className="universalDescription">
            {descriptionText()}
        </section>
    );
};

export default UniversalDescription;