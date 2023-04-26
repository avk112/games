import React, {useState, useEffect} from 'react';
import QuestionBlock from "./QuestionBlock";
import MyButton from "../../UI/buttons/MyButton";
import MyLoading from "../../MyLoading";
import {useDispatch} from "react-redux";
import {clearScore} from "../../../redux/quizical/scoreSlice";
import defaultGameState from "../../../data/quizical/defaultGameState";;


const QuestionsArea = ({gameState, setGameState, score, setScore}) => {
    const dispatch = useDispatch();
    const questionsNumber=gameState.totalQuestions;
    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const getQuestions = async ()=> {
        setIsLoading(true);
        dispatch(clearScore());
        setGameState(defaultGameState);
        try {
             await fetch("https://opentdb.com/api.php?amount=" + questionsNumber + "&difficulty=easy")
                .then(res => res.json())
                .then(data => {
                    const arr = JSON.stringify(data.results).replace(/&quot;|&#039;|&amp;|&iacute;/g, "'");
                    const parsed = JSON.parse(arr);

                    let newArr = [];
                    parsed.map((quest, i) => {
                        let answers = quest.incorrect_answers;
                        answers.push((quest.correct_answer));
                        answers.sort(() => Math.random() - 0.5);
                        const answObj = answers.map(answ => {
                            return {
                                answer: answ,
                                color: "standart",
                                disabled: false
                            }
                        })
                        return (
                            newArr.push({
                                question: quest.question,
                                answers: answObj,
                                correct_answer: quest.correct_answer
                            })
                        )
                    })
                    setQuestions(newArr);
                    setIsLoading(false);
                })
        }
        catch (error){
            console.log("Something wrong. Error "+error);
        }
    }

    const questionsBlock =  questions.map((quest, index) => {
        return <QuestionBlock
            key={index}
            {...quest}
        />
    });



    useEffect(()=>{
        getQuestions();
    }, []);



    return (<>
            {isLoading
                ? <MyLoading/>
                : questionsBlock
            }
            <MyButton
                text="New Questions"
                click={getQuestions}
            />
             </>
    )
};

export default QuestionsArea;