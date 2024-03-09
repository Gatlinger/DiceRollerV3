import React, { useMemo, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";
import { ResultStateType } from "../../state/resultReducer";
import { StateType } from "../../state/diceReducer";
import { HistoryStateType, resetHistoryAC } from "../../state/historyReduser";

export const HistoryPage = () => {

    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)
    const dices = useSelector<AppRootStateType, Array<StateType>>(state => state.dices)
    const history = useSelector<AppRootStateType, HistoryStateType>(state => state.history)
    const dispatch = useDispatch()

    const nameArray = Object.keys(history)

    const fooTest = () => {
        for (let i = 0; i < nameArray.length; i++) {
            return (
                <div>
                    <Typography sx={{ flex: 1 }} variant={"h4"} color={"black"} m={1}>{nameArray[i]}</Typography>
                    {nameArray.map(e => history[e].map(i => <Typography sx={{ flex: 1 }} variant={"h4"} color={"blue"} m={1}>{i.name + ': ' + i.value}</Typography>))}
                </div>
            )
        }
    }

    return (
        <div>
            <Stack spacing={1} direction={'row'} m={1}>
                <Button variant={"contained"} color={"info"} fullWidth={true} onClick={() => dispatch(resetHistoryAC())}>{<RestartAlt />}RESET HISTORY</Button>
            </Stack>
            <Box component="section" textAlign={"center"} alignItems={"center"}>
                <Stack spacing={1} direction={'row'} m={1}>
                    <Typography sx={{ flex: 1 }} variant={"h3"} m={1}>History</Typography>
                </Stack>
                <Stack spacing={1} direction={'row'} m={1} flexDirection={"column"}>

                    {fooTest()}

                </Stack>
            </Box>
        </div>
    )
}