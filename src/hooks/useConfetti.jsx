import React from 'react';
import Confetti from "react-confetti";

const useConfetti = () => {
    const confettiBlock = (isActive) => {
        if (isActive)
            return (
                <Confetti numberOfPieces={300} gravity={0.1} />
            )
    }

    return {confettiBlock};

};

export default useConfetti;