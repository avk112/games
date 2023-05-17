import React, {useEffect, useState} from 'react';
import classes from "./ItemsBlock.module.scss";
import items from "../../../data/rps/itemsToChoose";

const ItemsBlock = ({enableToChoose, makeOpponentChoice}) => {
    const [dices, setDices] = useState(items);
    const [itemBeforeTop, setItemBeforeTop] = useState(0);


    const handleClick = (id, isDisabled)=> {
        if(!isDisabled && enableToChoose){
            const newId = Number(id);
            const newDices = dices.map(item=>{
                return item.number===newId ? {...item, clicked: true, disabled: true} : {...item, disabled: true};
            });

            setDices(newDices);
            makeOpponentChoice(newId);
        }
    };

    useEffect(()=>{
        if(enableToChoose) {
            setItemBeforeTop("-110%");
        }
        if(!enableToChoose) {
            setDices(items);
            setItemBeforeTop(0);
        }
    }, [enableToChoose]);



    return (
        <div className={classes.itemsBlock}>
            {dices.length>0 && dices.map((item, index)=>{
                const background = item.clicked ? "clicked" : "standart";
                return(
                    <div key={index}
                            className={classes.itemsBlock__item + " "+ classes[background]}
                    >
                        <div className={classes.itemsBlock__item__before} style={{top: itemBeforeTop}}> </div>
                        <img
                            src={item.img}
                             onClick={()=>handleClick(item.number, item.disabled)}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default ItemsBlock;