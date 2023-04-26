import React from 'react';
import cancelImg from "../image/cancel.png";

const HiddenScreen = ({content, isVisible, handleVisible}) => {
    return (
        < div className="universalHiddenScreen" style={{display: isVisible ? "block" : "none"}}>
            <div
                className="universalHiddenScreen__background"
                onClick={()=>handleVisible(false)}
            >
                <img src={cancelImg}/>
            </div>
            <>
                {content}
            </>
        </div>
    );
};

export default HiddenScreen;