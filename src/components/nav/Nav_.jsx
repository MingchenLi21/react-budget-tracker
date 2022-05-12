import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import LoginButton from "./LoginButton";
import Nav from 'react-bootstrap/Nav'
import RegisterButton from "./RegisterButton";
import LogoutButton from "./LogoutButton";
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack'

const Nav_ = () => {

    const { username } = useContext( AppContext );

    return (
        <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Budget Planner</Navbar.Brand>
                    <div className="row justify-content-end">
                        <Nav className="me-auto">
                            { username ?
                                <div className="row justify-content-end">
                                    <LogoutButton />
                                </div>
                                :
                                <Stack direction="horizontal" gap={ 4 } >
                                    <Nav.Item>
                                        <LoginButton />
                                    </Nav.Item>

                                    <Nav.Item>
                                        <RegisterButton />
                                    </Nav.Item>
                                </Stack>
                            }
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </Container>
    );


    // return (
    //     <nav className="navbar sticky-top navbar-expand-lg bg-dark navbar-dark container">
    //         <div className="navbar-nav ml-auto">
    //             <LoginButton />
    //             <RegisterButton />
    //             <LogoutButton />
    //         </div>
    //     </nav> );
}
export default Nav_;