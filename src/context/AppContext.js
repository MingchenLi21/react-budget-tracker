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
    budget: 50000,
    expenses: [
        { id: 10, category: "shopping", name: "milk", date: new Date("2022-05-17"), cost: 40 },
        { id: 11, category: "entertainment", name: "holiday", date: new Date("2022-01-17"), cost: 400 },
        { id: 12, category: "transport", name: "travelling", date: new Date("2022-02-17"), cost: 40 },
        { id: 13, category: "utility", name: "electricity", date: new Date("2022-06-17"), cost: 350 },
        { id: 14, category: "shopping", name: "apple", date: new Date("2022-09-17"), cost: 150 },
        { id: 15, category: "shopping", name: "wallet", date: new Date("2022-03-17"), cost: 250 },
        { id: 16, category: "shopping", name: "ps6", date: new Date("2022-02-17"), cost: 540 },
        { id: 17, category: "entertainmen", name: "movie", date: new Date("2022-12-17"), cost: 200 },
        { id: 18, category: "activities", name: "party", date: new Date("2022-07-17"), cost: 500 },
        { id: 19, category: "activities", name: "onlinecourses", date: new Date("2022-12-17"), cost: 500 },
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