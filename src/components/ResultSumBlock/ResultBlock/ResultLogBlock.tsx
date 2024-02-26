import React from "react";
import {Button, Stack, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {StateType} from "../../../state/diceReducer";
import {ResultStateType, rollManyDicesAC, rollOneDiceAC} from "../../../state/resultReducer";


// const nameArray = ["D20Id", "D12Id", "D10Id", "D8Id", "D6Id", "D4Id",]
export const ResultLogBlock = () => {

    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)
    const dices = useSelector<AppRootStateType, Array<StateType>>(state => state.dices)
    const dispatch = useDispatch()
    const nameArray = dices.map(e => e.id)


    return (
        <>
            {nameArray.map(y => rolledDices[y].map(e => <Typography variant={"h4"} color={"blue"} m={1}>{e.name + ': ' + e.value}</Typography>))}
        </>
    )
}
// <Typography variant={"h4"} color={"blue"} m={1}>{d.name + ': ' + d.value}</Typography>
// <Typography variant={"h4"} color={"green"} m={1}>20 MAX CRIT</Typography>
// <Typography variant={"h4"} color={"red"} m={1}>1 MIN CRIT</Typography>
// <Typography variant={"h4"} color={"blue"} m={1}>10</Typography>