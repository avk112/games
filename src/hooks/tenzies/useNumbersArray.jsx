import React from 'react';

const useNumbersArray = (count, setNumbersArray) => {
    const getNewNumbersArray = ()=> {
        const arr=[];
        for(let i=count; i>0; i-=1 ){
            const numb = Math.floor(Math.random()*(11-1))+1;
            arr.push({id: i, num: numb, isClicked: false});
        }
        return setNumbersArray(arr);
    }

    return {getNewNumbersArray}

};

export default useNumbersArray;