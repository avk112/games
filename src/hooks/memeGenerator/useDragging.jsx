import React from 'react';

const useDragging = (myRef, heightRef, meme, setMeme) => {

    const startDrag = (event)=> {
        event.dataTransfer.effectAllowed="move";
        const id = event.target.id;
        const saldoX = event.pageX+ 9 -(window.innerWidth-myRef.current.offsetWidth)/2-event.target.offsetLeft;
        const saldoY = event.pageY -heightRef.current.offsetHeight- 70 -event.target.offsetTop;

        setMeme((prev)=> {
            return {
                ...prev, texts: prev.texts.map(t=>{
                    return t.id==id ? {...t, saldoX: saldoX, saldoY: saldoY} : t
                })
            }
        })
    }

    const endDrag = (event)=> {
        const marginLeftX = (window.innerWidth-myRef.current.offsetWidth)/2;
        const marginTopY = heightRef.current.offsetHeight + 70;
        const id = event.target.id;
        const saldoX = meme.texts.find(txt => txt.id == id).saldoX;
        const saldoY = meme.texts.find(txt => txt.id == id).saldoY;
        if( event.pageX  > marginLeftX + saldoX &&
            event.pageX < marginLeftX+myRef.current.offsetWidth-(event.target.offsetWidth-saldoX) &&
            event.pageY > marginTopY + saldoY &&
            event.pageY < marginTopY + myRef.current.offsetHeight - (event.target.offsetHeight-saldoY)
        ) {
            const coordX = event.pageX + 9 - marginLeftX - saldoX;
            const coordY = event.pageY - marginTopY - saldoY;

            setMeme(prev => {
                return {
                    ...prev, texts: prev.texts.map(t => {
                        return t.id == id ? {...t, x: coordX, y: coordY} : t
                    })
                }
            })
        }
    }
    return {startDrag, endDrag}
}

export default useDragging;