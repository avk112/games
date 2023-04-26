import React from 'react';
import navData from "../data/navigations";
import {NavLink} from "react-router-dom";

const Footer = () => {
    const navBlock = navData.map(item=>{
        const {id, name, url}=item;
        return <li key={id}>
                    <NavLink to={url} className={({isActive})=> isActive ? "activeStyle" : "passiveStyle"}>
                        {name}
                    </NavLink>
                </li>
    });


    return (
        <div className="footer">
            <nav>
                <ul className="footer__navList">
                    {navBlock}
                </ul>
            </nav>
            <span>© 2023 GameTech. All right reserved</span>
        </div>
    );
};

export default Footer;