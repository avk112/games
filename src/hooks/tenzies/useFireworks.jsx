import React from 'react';
import {Fireworks} from "fireworks/lib/react";

const useFireworks = () => {

    let fxProps = {
        count: 1,
        interval: 500,
        canvasWidth: 600,
        canvasHeight: 600,
        canvasTopOffset: 300,
        canvasLeftOffset: 50,
        particleTimeout: 6000,
        colors: ['#7828c4', '#4CAF50', '#f8b304', '#d70606', '#8191c7'],
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        })
    }

    const fireworksBlock = (isActive)=>{
        if (isActive){
            return(
                <Fireworks {...fxProps} />
            )
        }
    }
    return {fireworksBlock};
};

export default useFireworks;