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
        event.dataTransfer.effectAllowed="move";
        const saldoX = event.pageX -(window.innerWidth-myRef.current.offsetWidth)/2-event.target.offsetLeft;
        const saldoY = event.pageY -myRef.current.offsetHeight -event.target.offsetTop;

        setMemeLine(prev=> ({...prev, saldoX: saldoX, saldoY: saldoY}));
    }

    const endDrag = (event)=> {
        const marginLeftX = (window.innerWidth-myRef.current.offsetWidth)/2;
        const marginTopY = myRef.current.offsetHeight;
        const saldoX = memeLine.saldoX;
        const saldoY = memeLine.saldoY;
        if( event.pageX  > marginLeftX + saldoX &&
            event.pageX < marginLeftX+myRef.current.offsetWidth-(event.target.offsetWidth-saldoX) &&
            event.pageY > marginTopY + saldoY &&
            event.pageY < marginTopY + myRef.current.offsetHeight - (event.target.offsetHeight-saldoY)
        ) {
            const coordX = event.pageX - marginLeftX - saldoX;
            const coordY = event.pageY - marginTopY - saldoY;

            setMemeLine(prev => ({...prev, x: coordX, y: coordY}));
        }
    };



        return (
            <span
                draggable={true}
                onDragStart={startDrag}
                onDragEnd={endDrag}
                style={{top: memeLine.y+"px", left: memeLine.x+"px", fontSize: fontSize}}
                className={classes.textBlock}
            >
                {text}
            </span>
        )
}

export default TextBlock;