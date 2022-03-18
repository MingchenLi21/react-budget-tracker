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
        { id: 10, category: "shopping", name: "shopping", date: new Date("2022-05-17"), cost: 40 },
        { id: 11, category: "test1", name: "travelling", date: new Date("2022-01-17"), cost: 400 },
        { id: 12, category: "grocery", name: "holiday", date: new Date("2022-02-17"), cost: 40 },
        { id: 13, category: "gas", name: "utility", date: new Date("2022-06-17"), cost: 50 }
    ],
};

export const AppContext = createContext();

export const AppProvider = ( props ) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState );

    return ( <AppContext.Provider value={ {
        budget: state.budget,
        expenses: state.expenses,
        category: state.category,
        date: state.date,
        dispatch,
    } }>
        { props.children }
    </AppContext.Provider> )
};