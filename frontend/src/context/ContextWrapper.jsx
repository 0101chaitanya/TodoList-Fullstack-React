import React, {useReducer} from 'react'
import AppContext from "./AppContext.jsx";


const ContextWrapper = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        theme: "emerald",
    });


    return (
        <AppContext value={
            {
                state,
                dispatch
            }
        }>
            {children}
        </AppContext>
    )
}


const reducer = (state = {
    todos: []
}, {type, payload}) => {
    switch (type) {
        case 'add-new-todo':
            return {...state, ...payload}
        default:
            return state
    }
}


export default ContextWrapper
