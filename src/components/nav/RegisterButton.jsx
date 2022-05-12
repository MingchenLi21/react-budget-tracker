import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';
import RegisterForm from '../login/RegisterForm';
import 'react-responsive-modal/styles.css';
import Button from 'react-bootstrap/Button'

const RegisterButton = ( props ) => {
    const [ open, setOpen ] = useState( false );

    const onOpenModal = () => setOpen( true );
    const onCloseModal = () => setOpen( false );

    return (
        <div>
            <Button variant="info" onClick={ onOpenModal }>Register</Button>
            <Modal open={ open } onClose={ onCloseModal } center>
                <RegisterForm closeModal={onCloseModal}/>
            </Modal>
        </div>
    );
}

export default RegisterButton;