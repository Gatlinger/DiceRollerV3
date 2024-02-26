import React from "react";
import {initialState, resetButtonAC, resetButtonActionType, StateType} from "./diceReducer";
import {addNewHistoryAC, AddNewHistoryActionType} from "./historyReduser";
import {useDispatch} from "react-redux";

export type RollOneDiceActionType = {
    type: "ROLL-ONE-DICE"
    id: string,
    name: string,
    sides: number
}
export type RollManyDicesActionType = {
    type: "ROLL-MANY-DICES"
    values: Array<StateType>
}

export type ResultType = {
    name: string
    value: number
    id: string
    sides: number
}

export type ResultStateType = {
    [key: string]: Array<ResultType>
}

export const initialResultState: ResultStateType = {
    "D20Id": [],
    "D12Id": [],
    "D10Id": [],
    "D8Id": [],
    "D6Id": [],
    "D4Id": []
}
export let stateResult:ResultStateType = {...initialResultState}

export type ActionType = RollOneDiceActionType
    | RollManyDicesActionType
    | resetButtonActionType
    | AddNewHistoryActionType

export const resultReducer = (state: ResultStateType = initialResultState, action: ActionType): ResultStateType => {
    switch (action.type) {
        case "ROLL-ONE-DICE": {
            const stateCopy = {...initialResultState}
            const random = Math.floor(Math.random() * action.sides + 1)
            const newDiceRolled: ResultType = {id: action.id, name: action.name, sides: action.sides, value: random}
            return {...stateCopy, [action.id]: [newDiceRolled]}
        }
        case "ROLL-MANY-DICES": {
            let stateCopy: ResultStateType = JSON.parse(JSON.stringify(initialResultState))
            let stateIds: Array<StateType> = action.values.map(e => e)
            if (stateIds.length > 0) {
                for (let i = 0; i < stateIds.length; i++) {
                    for (let j = 0; j < stateIds[i].value; j++) {
                        const random = Math.floor(Math.random() * stateIds[i].sides + 1)
                        const newDiceRolled: ResultType = {
                            id: stateIds[i].id,
                            name: stateIds[i].name,
                            sides: stateIds[i].sides,
                            value: random
                        }
                        stateCopy = {
                            ...stateCopy, [stateIds[i].id]: [...stateCopy[stateIds[i].id], newDiceRolled]
                        }
                    }
                }
            }
            stateResult = stateCopy
            return stateResult
        }
        case "RESET-MAIN-PAGE": {
            return initialResultState
        }
        default:
            return state
    }
}

export const rollOneDiceAC = (id: string, name: string, sides: number): RollOneDiceActionType => {
    return {type: "ROLL-ONE-DICE", id, name, sides}
}
export const rollManyDicesAC = (values: Array<StateType>): RollManyDicesActionType => {
    return {type: "ROLL-MANY-DICES", values}
}