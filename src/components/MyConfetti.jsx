import React, {useState} from 'react';
import Confetti from "react-confetti";

const MyConfetti = ({duration=5000}) => {
    const [confettiOn, setConfettiOn] = useState(true);

    const getConfetti = ()=>{
        if(confettiOn){
            setTimeout(()=> {
                setConfettiOn(false)
            }, duration);
            return <Confetti numberOfPieces={300} gravity={0.1} width={window.innerWidth*0.98}/>
        }
    };


    return (
        getConfetti()
    );
};

export default MyConfetti;