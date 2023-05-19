import React  from 'react';
import styles from "./HomePage.module.scss";
import {useSelector} from "react-redux";
import GamesArea from "./GamesArea";


const HomePage = () => {
    const userName = useSelector(store=>store.user.userName);

    return (
            <div className={styles.homepage}>
                <div className={styles.homepage__top}>
                    <h1 className={styles.homepage__top__title}>
                        GameTech welcomes you, {userName}!
                    </h1>
                    <p>An awesome place to spend some time</p>
                </div>
                <div className={styles.homepage__gamesArea}>
                    <GamesArea/>
                </div>

            </div>

    );
};

export default HomePage;