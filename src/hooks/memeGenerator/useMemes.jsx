import React from 'react';
import {useState} from "react";

const useMemes = (linesNmb) => {

    const getTextObj = (nmbOfLines)=> {
        let array = [];
        for(let i=1; i<=nmbOfLines; i++) {
            array.push(
                {
                    id: i,
                    text: "",
                    x: '',
                    y: i * 80 + 20,
                    saldoX: '',
                    saldoY: '',
                    fontSize: 22
                }
            )
        }
        return array;
    }

    const [allMemes, setAllMemes] = useState([]);

   const getMemes = ()=> {
        fetch("https://api.imgflip.com/get_memes")
           .then(res => res.json())
           .then(data => data.data.memes.map((meme, index) => {
               index % 10 === 0 &&
              setAllMemes(prev => [...prev, {
                   id: meme.id,
                   url: meme.url,
                   texts: getTextObj(linesNmb)

               }])
           }))
   }


    const [meme, setMeme] = useState({id:1, url:"", texts: getTextObj(linesNmb)});

    return {allMemes, getMemes, meme, setMeme};
};

export default useMemes;