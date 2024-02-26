import React, { ChangeEvent, useEffect, useState } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { decrementValueAC, incrementValueAC, StateType } from "../../state/diceReducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../../state/store";
import { ResultStateType, rollManyDicesAC } from "../../state/resultReducer";
import { Casino } from "@mui/icons-material";
import { addNewHistoryAC } from "../../state/historyReduser";

export const InputBlock = () => {

    const dices = useSelector<AppRootStateType, Array<StateType>>(state => state.dices)
    const rolledDices = useSelector<AppRootStateType, ResultStateType>(state => state.rolledDices)
    const state = useSelector<AppRootStateType, AppRootStateType>(state => state)

    const dispatch = useDispatch()
    const valuesArray: Array<StateType> = dices.filter(e => e.value !== 0)


    const [modValue, setModValue] = useState<number>(0)

    useEffect(() => { dispatch(addNewHistoryAC(rolledDices)) }, [rolledDices])
    const rollButtonHandler = () => {

        dispatch(rollManyDicesAC(valuesArray))

    }
    const rollButtonHandler2 = () => {

    }


    return (
        <div>
            <>
                {dices.map(d => {
                    const incrimentValue = () => {
                        dispatch(incrementValueAC(d.id))
                    }
                    const decrimentValue = () => {
                        dispatch(decrementValueAC(d.id))
                    }
                    return (
                        <div>
                            <Stack m={1}>
                                <Stack spacing={1} direction={'row'} mt={1}>
                                    <span><TextField
                                        type={"number"}
                                        title={d.name}
                                        value={d.value || 0}
                                    />
                                    </span>
                                    <Button variant={"contained"} onClick={incrimentValue}>
                                        <Typography variant={'h5'}>+1</Typography>
                                    </Button>
                                    <Button variant={"contained"} onClick={decrimentValue}>
                                        <Typography variant={'h5'}>-1</Typography>
                                    </Button>
                                </Stack>
                            </Stack>
                        </div>

                    )
                }
                )
                }
                <Stack m={1}>
                    <Stack spacing={1} direction={'row'} mt={1}>
                        <span><TextField
                            name={'ModFieldId'}
                            type={"number"}
                            title={'Mod'}
                            value={modValue}
                        />
                        </span>
                        <Button variant={"contained"} onClick={() => {
                            setModValue(modValue + 1)
                        }}>
                            <Typography variant={'h5'}>+1</Typography>
                        </Button>
                        <Button  variant={"contained"} onClick={() => {
                            setModValue(modValue - 1)
                        }}>
                            <Typography variant={'h5'}>-1</Typography>
                        </Button>
                    </Stack>
                </Stack>
                <Stack m={1}>
                    <Button variant={"contained"} fullWidth={true} onClick={rollButtonHandler}>{<Casino />}ROLL</Button>
                </Stack>
            </>
        </div>
    )
}