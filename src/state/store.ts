import {combineReducers, createStore} from "redux";
import {diceReducer} from "./diceReducer";
import {resultReducer} from "./resultReducer";
import {historyReducer} from "./historyReduser";

const rootReducer = combineReducers({
    dices: diceReducer,
    rolledDices: resultReducer,
    history: historyReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log(store)
console.log(store.getState())


// @ts-ignore
window.store = store