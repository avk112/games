import React, {useState, useEffect} from 'react';
import styles from "./CellsArea.module.scss";
import MyButton from "../../UI/buttons/MyButton";


const CellsArea = ({gameState,setGameState, defaultGameState}) => {
    const buttonText = {
        roll: "Roll",
        newGame: "New Game"
    };

    const color = {
        true: "#0fe30ca3",
        false: "rgba(245,239,206,0.91)"
    }

    const [button, setButton] = useState(buttonText.roll);
    const [numbersArray, setNumbersArray] = useState([]);

    const getNewNumbersArray = ()=> {
        const arr=[];
        for(let i=gameState.cellsCount; i>0; i-=1 ){
            const numb = Math.floor(Math.random()*(gameState.imgCount))+1;
            arr.push({id: i, num: numb, isClicked: false});
        }
        return setNumbersArray(arr);
    };

    const clickOnCell = (cellNum)=> {
        if (!gameState.started) {
            setGameState(prevGame => {
                return {...prevGame,
                    started: true,
                    mainNumber: cellNum.num
                }});
        }
        if(!gameState.finished && (gameState.mainNumber===cellNum.num || gameState.mainNumber===0 )){
            const newNumbersArray = numbersArray.map(item=>{
                return item.id===cellNum.id ? {...item, isClicked: !item.isClicked} : item;
            });
            const clickedCells = newNumbersArray.filter(item=>item.isClicked).length;

            setNumbersArray(newNumbersArray);
            if(clickedCells===gameState.cellsCount){
                    setGameState(prev => ({...prev, finished: true}));
                    setButton(buttonText.newGame)
                }
            if(clickedCells===0){
                setGameState(defaultGameState)
            }
        }
    }

    const changeCells = ()=> {
        if(gameState.finished){
            getNewNumbersArray();
            setGameState(defaultGameState);
            setButton(buttonText.roll);
        }
        else {
            const array= numbersArray.map((numb)=>{
                return !numb.isClicked ? ({...numb, num: Math.floor(Math.random()*(gameState.imgCount))+1}) : numb;
            })
            setNumbersArray(array);
        }
    }



    const cellsBlock =numbersArray.map((num, index) => {
        const choisedColor = color[num.isClicked];
        return (
            <div key={index}
                 id={num.id}
                 onClick={()=>clickOnCell(num)}
                 style={{background:choisedColor}}
                 className={styles.cells__item}>
                <img src={require("../../../image/tenzies/"+num.num+".png")}/>
            </div>
        )
    })

    useEffect(()=>{
        getNewNumbersArray();
    }, [])

    return (
        <>
            <div className={styles.cells}>
                 {cellsBlock}
            </div>
            <MyButton
                text={button}
                click={changeCells}
            />
        </>
    );
//     const [rolling, setRolling] = useState();
//     const [clickedCells, setClickedCells] = useState(0);
//     const rollCells = ()=> {
//         setRolling(Date.now());
//     };
//
//
//     const cellsBlock = ()=> {
//         let arr=[];
//         for(let i=0; i<10; i++){
//             arr.push(<CellBlock
//                 key={i}
//                 gameState={gameState}
//                 setGameState={setGameState}
//                 rolling={rolling}
//                 setClickedCells={setClickedCells}
//             />)
//         }
//         return arr;
//     };
//
//
//     useEffect(()=> {
//         if(gameState.started &&!gameState.finished){
//             if(clickedCells===gameState.cellsCount){
//                 setGameState(prev => ({...prev, finished: true}));
//                 setButton(buttonText.newGame)
//             }
//             if(clickedCells===0){
//                 setGameState(defaultGameState)
//             }
//         }
//     }, [clickedCells])
//
// return (
//         <>
//             <div className={styles.cells}>
//                  {cellsBlock()}
//             </div>
//             <MyButton
//                 text={button}
//                 click={rollCells}
//             />
//         </>
//     );
};

export default CellsArea;