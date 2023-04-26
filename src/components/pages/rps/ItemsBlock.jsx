import React from 'react';
import classes from "./RPS.module.css";

const ItemsBlock = ({dices,getItem,itemBeforeTop}) => {
    const gradient = {
        clicked: "linear-gradient(to bottom, #23C33A 0%, #49DF4A 55%, #28E123 100%)",
        standart: "linear-gradient(to bottom, #2880E6 0%, #3BACD0 55%, #277DE1 100%)"
    }

    return (
        <div className={classes.itemsBlock}>
            {dices.map((item, index)=>{
                const color = item.clicked ? gradient.clicked : gradient.standart;

                return <div key={index}
                            className={classes.item}
                            onClick={()=>getItem(item.title, item.disabled)}
                            style={{background: color}}>
                    <div className={classes.itemBefore} style={{top: itemBeforeTop}}></div>
                    <img src={item.img}/>
                </div>
            })}
        </div>
    );
};

export default ItemsBlock;