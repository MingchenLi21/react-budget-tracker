import axios from 'axios';
import React from 'react';
import Button from 'react-bootstrap/Button'

const LogoutButton = (props) => {

    const handleClick = () => {
        axios.post("/api/logout");
        window.location.reload(false);
    };

    return (
        <div>
            <Button variant="warning" onClick={ handleClick }>Logout</Button>
        </div>
    );
};

export default LogoutButton;