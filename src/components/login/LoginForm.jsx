import React, { useContext, useState } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppContext";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginForm = ( props ) => {
    const [ username, setUsername ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const { dispatch } = useContext( AppContext );

    const onSubmit = ( event ) => {
        event.preventDefault();

        axios.post( "api/login", { username: username, password: password } )
            .then( res => {
                if ( !res.data.username ) {
                    return alert("Username or password is incorrect!")
                }

                let { username, budget, items } = res.data;
                items = items.map( item => { return { ...item, date: new Date( item.date ) } } )
                dispatch( {
                    type: "SET_STATE",
                    payload: { username, budget, expenses: items },
                } );

                props.closeModal(); // close the modal

            } );
    };

    return (
        <div>
            <h2>Login</h2>
            <Form onSubmit={ onSubmit } className="validated-form">
                <Form.Group className="mb-3">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        id="username"
                        name="username"
                        required="required"
                        placeholder="username"
                        onChange={ ( event ) => setUsername( event.target.value ) }
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        required="required"
                        placeholder="password"
                        onChange={ ( event ) => setPassword( event.target.value ) }
                    />
                </Form.Group>

                <Button type="submit" variant="success">Login</Button>
            </Form>
        </div>
    );

    // return (
    //     <div>
    //         <h2>Login</h2>
    //         <form onSubmit={onSubmit} className="validated-form">
    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor="username">Username:</label>
    //                 <input className="form-control"
    //                        type="text" 
    //                        id="username" 
    //                        name="username" 
    //                        required="required"
    //                        onChange={(event) => setUsername(event.target.value)}
    //                         ></input>
    //                 <div className="valid-feedbanpm ick">
    //                     Looks good!
    //                 </div>
    //             </div>

    //             <div className="mb-3">
    //                 <label className="form-label" htmlFor="password">Password:</label>
    //                 <input className="form-control"
    //                        type="password"
    //                        id="password" 
    //                        name="password" 
    //                        required="required"
    //                        onChange={(event) => setPassword(event.target.value)}></input>
    //                 <div className="valid-feedback">
    //                     Looks good!
    //                 </div>
    //             </div>

    //             <button type="submit" className="btn btn-success">Login</button>
    //         </form>
    //     </div>
    // );
};

export default LoginForm;