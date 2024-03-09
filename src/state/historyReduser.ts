import { ActionType, initialResultState, ResultStateType, ResultType } from "./resultReducer";
import { initialState } from "./diceReducer";
import { log } from "console";
import { useEffect, useState } from "react";
import { setTimeout } from "timers/promises";

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

            let stateCopy = { ...state }

            const nameArray = Object.keys(action.history)
            let newHistory: Array<SingleHistoryStateType> = []

            const date = new Date()
            const hour = date.getHours()
            const minute = date.getMinutes()
            const seconds = date.getSeconds()
            // const currantTimeKey = hour + ':' + minute + '.' + seconds
            const prevTimekey: string = hour + ':' + minute + '.' + seconds

            for (let i = 0; i < nameArray.length; i++) {
                action.history[nameArray[i]].map(e => newHistory = [...newHistory, { name: e.name, value: e.value }])

            }
            // console.log({...stateCopy, [hour + ':' + minute + '.' + seconds]: newHistory});

            return { ...stateCopy, [hour + ':' + minute + '.' + seconds]: newHistory }
        }
        case "RESET-HISTORY": {
            return { ...initialHistoryArray }
        }
        default:
            return state
    }
}

export const addNewHistoryAC = (history: ResultStateType): AddNewHistoryActionType => {
    return { type: "ADD-NEW-HISTORY", history }
}
export const resetHistoryAC = (): ResetHistoryActionType => {
    return { type: "RESET-HISTORY" }
}