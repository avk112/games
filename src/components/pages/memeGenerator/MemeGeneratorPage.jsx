import React, {useEffect, useRef, useState} from 'react';
import classes from "./MemeGenerator.module.css";
import {useSelector} from "react-redux";
import useScreenshot from "../../../hooks/memeGenerator/useScreenshot";
import useDragging from "../../../hooks/memeGenerator/useDragging";
import useMemes from "../../../hooks/memeGenerator/useMemes";
import HeaderBlock from "./HeaderBlock";
import ButtonBlock from "./ButtonBlock";
import MainMemeBlock from "./MainMemeBlock";

const MemeGeneratorPage = () => {

    const user = useSelector(state=>state.user.userName);
    const {allMemes, getMemes, meme, setMeme} = useMemes(4);
    const myRef = useRef(null);
    const heightRef = useRef(null);
    const {startDrag, endDrag} = useDragging(myRef, heightRef, meme, setMeme);
    const downloadMeme = useScreenshot(myRef.current, "my-meme");
    const [isLoading, setIsLoading] = useState(true);


    const handleInput = (event)=> {
        const text = event.target.value;
        const id = event.target.id;
        setMeme(prev => {
            return {...prev, texts: prev.texts.map(t=>t.id==id ? {...t, text: text} : t)
            }
        })
    }

    const changeTextSize = (e, iterate)=> {
        const id=e.target.id;
        setMeme(prev=> {
            return{...prev, texts: prev.texts.map(t=> t.id==id ? {...t, fontSize: t.fontSize + iterate} : t)}
        })
    }

    const getRandomImage = ()=> {
        setIsLoading(true)
        const length = allMemes.length;
        const i = Math.floor(Math.random()*(length + 1-1));
        setMeme(allMemes[i]);
        setIsLoading(false);
    }

    useEffect(()=>{
        //выставил таймаут, чтобы симулровать загрузку с сервера и увидеть эффект isLoading
        setTimeout(()=>getMemes(), 500);
    }, []);

    useEffect(()=>{
        allMemes.length > 0 && getRandomImage();

    }, [allMemes])


    return (
        <div className={classes.memeGenerator}>
            <div className={classes.memeGameblock}>
                <HeaderBlock
                    heightRef={heightRef}
                    user={user}
                    meme={meme}
                    handleInput={handleInput}
                    changeTextSize={changeTextSize}
                />
                <MainMemeBlock
                    myRef={myRef}
                    meme={meme}
                    startDrag={startDrag}
                    endDrag={endDrag}
                    isLoading ={isLoading}
                />
                <ButtonBlock
                    getRandomImage = {getRandomImage}
                    downloadMeme = {downloadMeme}
                />
            </div>
        </div>
    );
};

export default MemeGeneratorPage;