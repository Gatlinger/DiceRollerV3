import React, { useMemo } from 'react';
import './App.css';
import {DiceMainPage} from "./components/Pages/DiceMainPage";
import {AppBarHeader} from "./components/AppBarHeader";
import { Route, Routes} from "react-router-dom";
import { HistoryPage } from './components/Pages/HistoryPage';
import { useSelector } from 'react-redux';
import { AppRootStateType } from './state/store';
import { ResultStateType } from './state/resultReducer';

function App() {


    return (
        <>
            <AppBarHeader/>
            <Routes>
                <Route path={"/"} element={<DiceMainPage/>}/>
                <Route path={"/history"} element={<HistoryPage/>}/>
            </Routes>
        </>
    )
}

export default App;
