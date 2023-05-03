import React, {useState} from 'react';
import classes from "./TextBlock.module.scss";
import {useSelector} from "react-redux";

const TextBlock = ({inputId,myRef}) => {
    const fontSize = useSelector(state=>state.memesLines[inputId].fontSize);
    const text = useSelector(state=>state.memesLines[inputId].text)

    class Line {
        constructor(id=inputId) {
            this.id = id;
            this.x =  50;
            this.y = id * 25+20;
            this.saldoX = '';
            this.saldoY = '';
        }
    }

    const [memeLine, setMemeLine]=useState(new Line);

    const startDrag = (event)=> {
        if(event.type==="dragstart"){
            event.dataTransfer.effectAllowed = "move";
        }
        const eventX = event.type==="dragstart" ? event.pageX :event.touches[0].screenX;
        const eventY = event.type==="dragstart" ? event.pageY :event.touches[0].screenY;
        const saldoX = eventX -(window.innerWidth-myRef.current.offsetWidth)/2-event.target.offsetLeft;
        const saldoY = eventY -myRef.current.offsetHeight -event.target.offsetTop;

        setMemeLine(prev=> ({...prev, saldoX: saldoX, saldoY: saldoY}));
    }


    const endDrag = (event)=> {
        const marginLeftX = (window.innerWidth-myRef.current.offsetWidth)/2;
        const marginTopY = myRef.current.offsetHeight;
        const saldoX = memeLine.saldoX;
        const saldoY = memeLine.saldoY;
        const eventX = event.type==="dragend" ? event.pageX :event.changedTouches[0].screenX;
        const eventY = event.type==="dragend" ? event.pageY :event.changedTouches[0].screenY;
        if( eventX  > marginLeftX + saldoX &&
            eventX < marginLeftX+myRef.current.offsetWidth-(event.target.offsetWidth-saldoX) &&
            eventY > marginTopY + saldoY &&
            eventY < marginTopY + myRef.current.offsetHeight - (event.target.offsetHeight-saldoY)
        ) {
            const coordX = eventX - marginLeftX - saldoX;
            const coordY = eventY - marginTopY - saldoY;

            setMemeLine(prev => ({...prev, x: coordX, y: coordY}));
        }
    };



        return (
            <span
                draggable={true}
                onDragStart={startDrag}
                onTouchStart={startDrag}
                onDragEnd={endDrag}
                onTouchMove={endDrag}
                style={{top: memeLine.y+"px", left: memeLine.x+"px", fontSize: fontSize}}
                className={classes.textBlock}
            >
                {text}
            </span>
        )
}

export default TextBlock;