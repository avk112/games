import React from "react";
import {Route, Routes, Navigate} from "react-router-dom"
import HomePage from "../components/pages/HomePage";
import TenziesPage from "../components/pages/tenzies/TenziesPage";
import QuizicalPage from "../components/pages/quizical/QuizicalPage";
import MemeGeneratorPage from "../components/pages/memeGenerator/MemeGeneratorPage";
import SpeedTypingPage from "../components/pages/speedTyping/SpeedTypingPage";
import RPSPage from "../components/pages/rps/RPSPage";
import ErrorPage from "../components/pages/ErrorPage";
import LoginPage from "../components/pages/LoginPage";
import {useSelector} from "react-redux";
import CartPage from "../components/pages/CartPage";
import Layout from "../components/Layout";


const MyRoutes = ()=> {

    // const isAuth = useSelector(state=>state.user.registered);
    // console.log("Authorisation is " + isAuth);
    const isAuth=useSelector(state=>state.user.registered);
    // const isAuth=true;
    return (
          isAuth ?
              <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="tenzies" element={<TenziesPage/>}/>
                        <Route path="quizical" element={<QuizicalPage/>}/>
                        <Route path="meme-generator" element={<MemeGeneratorPage/>}/>
                        <Route path="speed-typing" element={<SpeedTypingPage/>}/>
                        <Route path="rock-paper-scissors" element={<RPSPage/>}/>
                        <Route path="login" element={<Navigate replace to="/"/>}/>
                        <Route path="cart" element={<CartPage/>}/>
                        <Route path="*" element={<ErrorPage/>}/>
                    </Route>
              </Routes>
                :
              <Routes>
                  <Route path="/" element={<Layout/>}>
                    <Route index element={<Navigate replace to="login"/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="*" element={<Navigate replace to="login"/>}/>
                  </Route>
              </Routes>
    )
}

export default MyRoutes;