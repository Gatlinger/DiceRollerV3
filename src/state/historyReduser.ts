import {ActionType, initialResultState, ResultStateType, ResultType} from "./resultReducer";
import {initialState} from "./diceReducer";

export type SingleHistoryStateType = {
    name: string
    value: number
}

export type HistoryStateType = {
    [key: string]: Array<SingleHistoryStateType>
}
export type AddNewHistoryActionType = {
    type: "ADD-NEW-HISTORY"
    history: ResultStateType
}
export type ResetHistoryActionType = {
    type: "RESET-HISTORY"
}
export type HistoryActionType =
    AddNewHistoryActionType
    | ResetHistoryActionType

export const initialHistoryArray: HistoryStateType = {}

export const historyReducer = (state: HistoryStateType = initialHistoryArray, action: HistoryActionType): HistoryStateType => {
    switch (action.type) {
        case "ADD-NEW-HISTORY": {
            let stateCopy = {...state}
            const nameArray = Object.keys(action.history)
            const date = new Date()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const seconds = date.getSeconds()
            const currantTimeKey = hour + ':' + minute + '.' + seconds
            for (let i = 0; i < nameArray.length; i++) {
                if (action.history[nameArray[i]].length > 0) {
                    for (let j = 0; j < action.history[nameArray[i]].length; j++) {
                        const newHistory = {name: action.history[nameArray[i]][j].name, value: action.history[nameArray[i]][j].value}
                        stateCopy = {...stateCopy, [currantTimeKey]: [...stateCopy[currantTimeKey], newHistory]}
                    }
                }
            }
            console.log(stateCopy)
            return stateCopy
        }
        case "RESET-HISTORY": {
            return {...initialHistoryArray}
        }
        default:
            return state
    }
}

export const addNewHistoryAC = (history: ResultStateType): AddNewHistoryActionType => {
    return {type: "ADD-NEW-HISTORY", history}
}
export const resetHistoryAC = (): ResetHistoryActionType => {
    return {type: "RESET-HISTORY"}
}