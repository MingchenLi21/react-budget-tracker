import React, { useEffect, useState } from "react";
import axios from "axios";


const DailyJokes = () => {
    const [ jokeText, setjokeText ] = useState( "Loading..." );
    useEffect( () => {
        try {
            const config = { headers: { Accept: "application/json", } };
            axios.get( "https://icanhazdadjoke.com", config ).then( res => {

                setjokeText( res.data.joke );
            } );

        } catch ( e ) {
            return "Sorry something is wrong. No jokes today. :(";
        }
    }, [] );


    return (
        <div>
            <span>Today's Joke: { jokeText }</span>
        </div>
    );
}

export default DailyJokes;