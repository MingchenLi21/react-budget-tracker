import { createContext, useReducer } from "react";

const AppReducer = ( state, action ) => {
    switch ( action.type ) {
        case "ADD_EXPENSE":
            return {
                ...state,
                expenses: [ ...state.expenses, action.payload ],
            };
        case "DELETE_EXPENSE":
            return {
                ...state,
                expenses: state.expenses.filter( ( expense ) => expense.id !== action.payload ),
            }
        default:
            return state;
    }
};

const initialState = {
    budget: 1000,
    expenses: [
        { id: 10, name: "shopping", cost: 40 },
        { id: 11, name: "travelling", cost: 400 },
        { id: 12, name: "holiday", cost: 40 },
        { id: 13, name: "utility", cost: 50 }
    ],
};

export const AppContext = createContext();

export const AppProvider = ( props ) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState );

    return ( <AppContext.Provider value={ {
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    } }>
        { props.children }
    </AppContext.Provider> )
};