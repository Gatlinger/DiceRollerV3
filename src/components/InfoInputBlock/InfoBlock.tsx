import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { AppRootStateType, store } from "../../state/store";
import { initialState, resetButtonAC, StateType } from "../../state/diceReducer";
import { useDispatch, useSelector } from "react-redux";
import { ResultStateType, rollOneDiceAC } from "../../state/resultReducer";
import { RestartAlt } from "@mui/icons-material";
import { addNewHistoryAC } from "../../state/historyReduser";

// export const InfoBlock = () => {
//     return (
//         <Stack m={1}>
//             <Stack spacing={1} direction={'row'} mt={1}>
//                 <Button variant={"contained"}>1</Button>
//                 <Typography variant={"h3"}>D20</Typography>
//             </Stack>
//         </Stack>
//     )
// }

export const InfoBlock = () => {
    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)
    const dices = useSelector<AppRootStateType, Array<StateType>>(state => state.dices)
    const dispatch = useDispatch()
    const resetButtonHandler = () => {
        dispatch(resetButtonAC())
    }


    return (
        <div>
            {dices.map(d => {
                const oneDiceRoll = () => {
                    dispatch(rollOneDiceAC(d.id, d.name, d.sides))
                    const foo = () => { dispatch(addNewHistoryAC(rolledDices)) }
                    foo()
                }
                return (
                    <>
                        <Stack m={1}>
                            <Stack spacing={1} direction={'row'} mt={1}>
                                <Button variant={"contained"} onClick={oneDiceRoll}>
                                    <Typography variant={'h5'}>1</Typography>
                                </Button>
                                <Typography variant={"h3"}>{d.name}</Typography>
                            </Stack>
                        </Stack>
                    </>
                )
            }
            )}
            <Stack m={1}>
                <Stack spacing={1} direction={'row'} mt={1}>
                    <Typography variant={"h3"}>Mod</Typography>
                </Stack>
            </Stack>
            <Stack m={1}>
                <Stack spacing={1} direction={'row'}>
                    <Button fullWidth={true} variant={"contained"} onClick={resetButtonHandler}>{<RestartAlt />}RESET</Button>
                </Stack>
            </Stack>
        </div>
    )

}