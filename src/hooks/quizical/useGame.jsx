import React from 'react';
import {useState} from "react";

const UseGame = () => {
    const questionsNumber=5;

    const scoreObj={
        correctAnswers: 0,
        totalAnswers: 0
    };

    const colors = {
        standart: "rgb(78 139 161)",
        correct: "green",
        incorrect: "red",
        disabled: "#EEBE33"
    }

    const descriptions = {
        intro: "intro",
        win:"win",
        fail: "fail"
    }

    const [questions, setQuestions] = useState([]);
    const [winStatus, setWinStatus] = useState(false);
    const [score, setScore] = useState(scoreObj);
    const [isLoading, setIsLoading] = useState(true);
    const [description, setDescription] = useState(descriptions.intro);

    const checkAnswer=(event, question)=> {
        const answer = event.target.value;
        return setQuestions(prev=>{
            return (prev.map(quest=>{
                    if(quest.question===question){
                        setScore(prev=>{
                            return {...prev, totalAnswers: prev.totalAnswers+1};
                        });

                        if(quest.correct_answer===answer){
                            setScore(prev=>{
                                return {...prev, correctAnswers: prev.correctAnswers+1};
                            });
                        }

                        return {...quest,
                            answers: quest.answers.map(answ=>{
                                let color=colors.standart;
                                if(answ.answer===answer){
                                    if(answer===quest.correct_answer){
                                        color=colors.correct;
                                    }
                                    else{
                                        color=colors.incorrect
                                    }
                                }
                                else{
                                    if(answ.answer===quest.correct_answer){
                                        color=colors.correct
                                    }
                                }
                                return {...answ,
                                    disabled: true,
                                    color: color}
                            })
                        }
                    }
                    else{
                        return quest;
                    }
                })
            )
        });
    }

    const getQuestions = ()=> {
        setIsLoading(true);
        setScore(scoreObj);
        fetch("https://opentdb.com/api.php?amount="+questionsNumber+"&difficulty=easy")
            .then(res=>res.json())
            .then(data=>{
                const arr = JSON.stringify(data.results).replace(/&quot;|&#039;/g, "'");
                const parsed = JSON.parse(arr);

                let newArr = [];
                const quests = parsed.map((quest, i)=>{
                    let answers=quest.incorrect_answers;
                    answers.push((quest.correct_answer));
                    answers.sort(()=>Math.random()-0.5);
                    const answObj = answers.map(answ=>{
                        return {
                            answer: answ,
                            color: colors.standart,
                            disabled: false
                        }
                    })
                    return(
                        newArr.push({
                            question: quest.question,
                            answers: answObj,
                            correct_answer: quest.correct_answer
                        })
                    )
                })
                setQuestions(newArr);
                setIsLoading(false);
                setWinStatus(false);
                setDescription(descriptions.intro)
            })
    }

    const checkScore = ()=> {
        if(score.totalAnswers===questionsNumber){
            if(score.correctAnswers===score.totalAnswers) {
                setWinStatus(true);
                setTimeout(()=>{
                    setWinStatus(false)
                },10000);
                setDescription(descriptions.win);
            }
            else {
                setDescription(descriptions.fail);
            }
        }
    }

    return {getQuestions, score, checkScore, winStatus, questionsNumber,
        description, isLoading, questions,checkAnswer, setWinStatus,
        setDescription, descriptions}
};

export default UseGame;