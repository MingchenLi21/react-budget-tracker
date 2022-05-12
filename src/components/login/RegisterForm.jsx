import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'


const RegisterForm = ( props ) => {
    const [ username, setUsername ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );

    const onSubmit = ( event ) => {
        event.preventDefault();

        axios.post( "api/newUser", { username: username, email: email, password: password } )
            .then( res => {

                if ( res.data === "Username or Email already existed!" ) {
                    return alert( "Username or Email already existed!" );
                }
                props.closeModal(); // close the modal
            } );



    };

    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={ onSubmit } className="validated-form">
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="username">Username:</Form.Label>
                    <Form.Control
                        type="text"
                        id="username"
                        name="username"
                        required="required"
                        value={ username }
                        onChange={ ( event ) => setUsername( event.target.value ) }
                    ></Form.Control>

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                        value={ email }
                        onChange={ ( event ) => setEmail( event.target.value ) }
                    ></Form.Control>

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Password:</Form.Label>
                    <Form.Control
                        type="password"
                        id="password"
                        name="password"
                        required="required"
                        value={ password }
                        onChange={ ( event ) => setPassword( event.target.value ) }
                    ></Form.Control>

                </Form.Group>

                <button type="submit" className="btn btn-success">Register</button>
            </Form>
        </div>
    );
};

export default RegisterForm;