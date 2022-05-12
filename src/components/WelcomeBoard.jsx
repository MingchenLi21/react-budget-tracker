import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const WelcomeBoard = () => {
    const { username } = useContext( AppContext );
    <h1 className="mt-3  text-center">{username ? username+"'s" : "My"} Yearly Budget Planner</h1>
};

export default WelcomeBoard;