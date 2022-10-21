import React from "react";
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "../pages/Home";
import TenziesPage from "../pages/tenzies/TenziesPage";
import QuizicalPage from "../pages/quizical/QuizicalPage";
import MemeGeneratorPage from "../pages/memeGenerator/MemeGeneratorPage";
import SpeedTypingPage from "../pages/speedTyping/SpeedTypingPage";
import RPSPage from "../pages/rps/RPSPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import {useSelector} from "react-redux";
import CartPage from "../pages/CartPage";


const MyRoutes = ()=> {

    const isAuth = useSelector(state=>state.user.registered);
    // console.log("Authorisation is " + isAuth);
    return (
          isAuth ?
              <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/tenzies" element={<TenziesPage/>}/>
                    <Route path="quizical" element={<QuizicalPage/>}/>
                    <Route path="meme-generator" element={<MemeGeneratorPage/>}/>
                    <Route path="speed-typing" element={<SpeedTypingPage/>}/>
                    <Route path="rock-paper-scissors" element={<RPSPage/>}/>
                    <Route path="/login" element={<Navigate replace to="/"/>}/>
                  <Route path="/cart" element={<CartPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
              </Routes>
                :
              <Routes>
                    <Route path="/" element={<Navigate replace to="/login"/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*" element={<Navigate replace to="/login"/>}/>
              </Routes>
    )
}

export default MyRoutes;