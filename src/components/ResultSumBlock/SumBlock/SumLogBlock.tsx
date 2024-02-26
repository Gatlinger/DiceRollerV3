import React from "react";
import {Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {ResultStateType} from "../../../state/resultReducer";
import {StateType} from "../../../state/diceReducer";

export const SumLogBlock = () => {
    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)
    const dices = useSelector<AppRootStateType, Array<StateType>>(state => state.dices)
    const dispatch = useDispatch()
    const nameArray = dices.map(e => e.id)

    let sum = 0
    for (let i=0; i<nameArray.length; i++) {
        for (let j=0; j<rolledDices[nameArray[i]].length; j++) {
            sum = sum + rolledDices[nameArray[i]][j].value
        }
    }

    return (
        <div>
            { nameArray.filter(e => rolledDices[e].length !== 0).length !== 0
                ? <Typography variant={"h4"} m={1}>{sum}</Typography>
                : ""}
        </div>
    )
}