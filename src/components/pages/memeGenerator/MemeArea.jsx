import React, {useEffect, useRef, useState} from 'react';
import classes from "./MemeArea.module.scss";
import TextsArea from "./TextsArea";
import MyLoading from "../../MyLoading";
import {useDispatch} from "react-redux";
import {clearLines} from "../../../redux/memeGenerator/linesSlice";
import ButtonsBlock from "./ButtonsBlock";
import {toJpeg} from "html-to-image";

const MemeArea = () => {
    const dispatch = useDispatch();
    const [meme, setMeme] = useState();
    const myRef = useRef(null);
    const memeRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const  getMeme = async ()=> {
        const randomMeme = Math.floor(Math.random()*101);
        setIsLoading(true);
        dispatch(clearLines());
        try {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setMeme(
                    {
                        name: data.data.memes[randomMeme].name,
                        img: data.data.memes[randomMeme].url,
                    }
                ))
        }
        catch (error){
            console.log("An Error "+error);
        }
        setTimeout(()=>{
            setIsLoading(false);
        }, 300)

    };

    const makeScreenshot = (name='myMeme', ref=memeRef.current)=> toJpeg(ref, { quality:1 })
        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = "myMeme";
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => {
            console.log(err)
        });


    useEffect(()=>{
        getMeme();
    }, []);


    return (
        <div className={classes.memeArea}>
            {isLoading
                ? <MyLoading/>
                :<div  className={classes.memeArea__memeBlock} ref={memeRef}>
                    <img src={meme?.img} alt="meme image" ref={myRef}/>
                   <TextsArea myRef={myRef}/>
                </div>
           }
            <ButtonsBlock
                getMeme={getMeme}
                downloadMeme={makeScreenshot}
            />
        </div>
    );
};

export default MemeArea;