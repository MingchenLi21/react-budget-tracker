import axios from "axios";
import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    budget: 50000,
    username: null,
    expenses: [
        { _id: uuidv4(), category: "shopping", name: "milk", date: new Date( "2022-05-17" ), amount: 40 },
        { _id: uuidv4(), category: "entertainment", name: "holiday", date: new Date( "2022-01-17" ), amount: 400 },
        { _id: uuidv4(), category: "transport", name: "travelling", date: new Date( "2022-02-17" ), amount: 40 },
        { _id: uuidv4(), category: "utility", name: "electricity", date: new Date( "2022-06-17" ), amount: 350 },
        { _id: uuidv4(), category: "shopping", name: "apple", date: new Date( "2022-09-17" ), amount: 150 },
        { _id: uuidv4(), category: "shopping", name: "wallet", date: new Date( "2022-03-17" ), amount: 250 },
        { _id: uuidv4(), category: "shopping", name: "ps6", date: new Date( "2022-02-17" ), amount: 540 },
        { _id: uuidv4(), category: "entertainment", name: "movie", date: new Date( "2022-12-17" ), amount: 200 },
        { _id: uuidv4(), category: "activities", name: "party", date: new Date( "2022-07-17" ), amount: 500 },
        { _id: uuidv4(), category: "activities", name: "onlinecourses", date: new Date( "2022-12-17" ), amount: 500 },
    ]
};

const AppReducer = ( state, action ) => {
    switch ( action.type ) {
        case "ADD_EXPENSE":
            if ( state.username ) {
                // also add the expense to db
                axios.post( "api/newItem", { ...action.payload } );
            }

            return {
                ...state,
                expenses: [ ...state.expenses, action.payload ],
            };
        case "DELETE_EXPENSE":
            if ( state.username ) {
                // also delete from db
                axios.post( "api/deleteItem", { id: action.payload } );
            }

            return {
                ...state,
                expenses: state.expenses.filter( ( expense ) => expense._id !== action.payload ),
            }
        case 'CHANGE_BUDGET':
            if ( state.username ) {
                // change the budget in db
                axios.post( "api/changeBudget", { budget: action.payload } );
            }

            return {
                ...state,
                budget: action.payload,
            };

        case "SET_STATE":
            return {
                budget: action.payload.budget,
                username: action.payload.username,
                expenses: action.payload.expenses
            };

        case "LOG_OUT":
            return {
                ...initialState,
            }

        default:
            return state;
    }
};

export const AppContext = React.createContext( initialState ); // create a context object

export const AppProvider = ( props ) => {
    const [ state, dispatch ] = React.useReducer( AppReducer, initialState );
    useEffect( () => {
        // check if the user is logged in
        axios.get( "api/isLoggedIn" ).then( res => {
            if ( res.data ) {
                let { username, budget, items } = res.data; // destructuring
                items = items.map( item => { return { ...item, date: new Date( item.date ) } } ); // modify the items before rendering
                dispatch( {
                    type: "SET_STATE",
                    payload: { username, budget, expenses: items },
                } );
            }
        } );
    }, [] );


    return ( <AppContext.Provider value={ {
        budget: state.budget,
        expenses: state.expenses,
        username: state.username,
        dispatch
    } }>
        { props.children }
    </AppContext.Provider> )
};