import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ThanksModal = ({ showModal, setShowModal }) => {
    // const { showModal } = showModal;
    // console.log(showModal);
    // const [show, setShow] = useState(false);

    const handleClose = () => setShowModal(false);
    // const handleShow = () => setShow(true);

    return (
        <div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Appointment Confirmed !!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thanks For Booking</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ThanksModal;