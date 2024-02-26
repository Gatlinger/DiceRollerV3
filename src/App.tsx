import React from 'react';
import './App.css';
import {DiceMainPage} from "./components/Pages/DiceMainPage";
import {AppBarHeader} from "./components/AppBarHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {HistoryPage} from "./components/Pages/HistoryPage";

function App() {
    return (
        <>
            <AppBarHeader/>
            <Routes>
                <Route path={"/*"} element={<DiceMainPage/>}/>
                <Route path={"/history"} element={<HistoryPage/>}/>
            </Routes>
        </>
    )
}

export default App;
