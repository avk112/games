import React from 'react';
import {useSelector} from "react-redux";
import UniversalDescription from "../../UniversalDescription";
import descriptionText from "../../../data/memesGenerator/description";
import InputsArea from "./InputsArea";
import MemeArea from "./MemeArea";

const MemeGeneratorPage = () => {
    const userName = useSelector(state=>state.user.userName);


    return (
        <div className="gamePage">
            <h1 className="gamePage__title">
                Welcome to Meme Generator, {userName}!
            </h1>
            <div className="gamePage__gameArea">
                <section className="gamePage__gameArea__left">
                    <InputsArea/>
                    <UniversalDescription
                        text={descriptionText}
                    />
                </section>
                <section className="gamePage__gameArea__right">
                    <MemeArea/>
                </section>
            </div>
        </div>
    );
};

export default MemeGeneratorPage;