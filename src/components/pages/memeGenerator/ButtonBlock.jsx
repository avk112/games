import React, {useState} from 'react';
import classes from "./MemeGenerator.module.css";
import MyButton from "../../UI/buttons/MyButton";
import download from "../../../image/memeGenerator/downloads.png";
import downloadHover from "../../../image/memeGenerator/downloads-hover.png";

const ButtonBlock = ({getRandomImage, downloadMeme}) => {
    const [isHovered, setIsHovered] = useState(false);
    const changeImg = ()=> {
        setIsHovered(prev=>!prev)
    }

    const downloadImg = isHovered ? downloadHover : download;
    return (
        <div className={classes.buttonBlock}>
            <MyButton
                text="Get random meme"
                click={getRandomImage}
            />
            <img src={downloadImg} className={classes.downloadIcon}
                 title="Download meme"
                alt="Download meme"
                onClick={downloadMeme}
                 onMouseOver={changeImg}
                 onMouseLeave={changeImg}
            />
        </div>
    );
};

export default ButtonBlock;