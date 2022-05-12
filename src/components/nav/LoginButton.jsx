import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';
import LoginForm from '../login/LoginForm';
import Button from 'react-bootstrap/Button'
import 'react-responsive-modal/styles.css';

const LoginButton = ( props ) => {
    const [ open, setOpen ] = useState( false );

    const onOpenModal = () => setOpen( true );
    const onCloseModal = () => setOpen( false );

    return (
        <div>
            <Button variant="success" onClick={ onOpenModal }>Login</Button>
            <Modal open={ open } onClose={ onCloseModal } center>
                <LoginForm closeModal={onCloseModal}/>
            </Modal>
        </div>
    );
}

export default LoginButton;