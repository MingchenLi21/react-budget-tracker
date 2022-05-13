import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import DailyJokes from "./DailyJokes";

const WelcomeBoard = () => {
    const { username } = useContext( AppContext );
    return (
        <div>
            <h1 className="mt-3  text-center">{ username ? username + "'s" : "My" } Yearly Budget Planner</h1>
            <DailyJokes />
        </div> );
};

export default WelcomeBoard;