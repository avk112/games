import React from 'react';
import {HashRouter as Router} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import store from "./redux";
import "./index.scss";
import MyRoutes from "./router/MyRoutes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <MyRoutes/>
        </Router>
    </Provider>

);
