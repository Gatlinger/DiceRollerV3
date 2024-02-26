export type StateType = {
    id: string
    name: string
    sides: number
    value: number
}
export type IncrementActionType = {
    type: "INCREMENT-THE-NUMBER-OF-DICEVALUE"
    diceId: string
}
export type decrementActionType = {
    type: "DECREMENT-THE-NUMBER-OF-DICEVALUE"
    diceId: string
}
export type onChangeHandlerActionType = {
    type: "CHANGE-THE-VALUE-BY-E"
    diceId: string
    bigE: number
}
export type rollOneDiceActionType = {
    type: "ROLL-ONE-DICE"
    diceId: string
    sides: number
}
export type resetButtonActionType = {
    type: "RESET-MAIN-PAGE"
}


export type ActionType =
    IncrementActionType
    | decrementActionType
    | onChangeHandlerActionType
    | rollOneDiceActionType
    | resetButtonActionType


export const initialState: Array<StateType> = [
    {id: 'D20Id', name: "D20", sides: 20, value: 0},
    {id: 'D12Id', name: "D12", sides: 12, value: 0},
    {id: 'D10Id', name: "D10", sides: 10, value: 0},
    {id: 'D8Id', name: "D8", sides: 8, value: 0},
    {id: 'D6Id', name: "D6", sides: 6, value: 0},
    {id: 'D4Id', name: "D4", sides: 4, value: 0}
]

export const diceReducer = (state: StateType[] = initialState, action: ActionType): StateType[] => {
    switch (action.type) {
        case "INCREMENT-THE-NUMBER-OF-DICEVALUE": {
            let stateCopy = [...state]
            let changingDice = stateCopy.find(d => d.id === action.diceId)
            if (changingDice) {
                stateCopy = stateCopy.map(d => d.id === action.diceId ? {...d, value: d.value + 1} : d)
                return [...stateCopy]
            } else {
                return [...stateCopy]
            }
        }
        case "DECREMENT-THE-NUMBER-OF-DICEVALUE": {
            let stateCopy = [...state]
            let changingDice = stateCopy.find(d => d.id === action.diceId)
            if (changingDice) {
                stateCopy = stateCopy.map(d => d.id === action.diceId && d.value !== 0 ? {...d, value: d.value - 1} : d)
                return [...stateCopy]
            } else {
                return [...stateCopy]
            }
        }
        case "RESET-MAIN-PAGE": {
            const stateCopy: Array<StateType> = [...initialState]
            return stateCopy
        }
        default:
            return state
    }
}

export const incrementValueAC = (diceId: string): IncrementActionType => {
    return {type: 'INCREMENT-THE-NUMBER-OF-DICEVALUE', diceId}
}
export const decrementValueAC = (diceId: string): decrementActionType => {
    return {type: 'DECREMENT-THE-NUMBER-OF-DICEVALUE', diceId}
}
export const resetButtonAC = (): resetButtonActionType => {
    return {type: "RESET-MAIN-PAGE"}
}
