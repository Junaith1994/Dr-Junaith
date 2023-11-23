import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import ThanksModal from './ThanksModal';

const CheckOut = () => {
    // Auth state from firebase hook
    const [user, loading, error] = useAuthState(auth);

    // For showing Modal
    const [showModal, setShowModal] = useState(false);

    // Using react-hook-form
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => {
        console.log(data);
        setShowModal(true)
    }

    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <div className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-center my-4'>Checkout Form</h1>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control className=' fw-bold' {...register("name", { required: true })} type="text" placeholder="Your Name" value={user?.displayName} />
                            {errors?.name && <p className='text-danger'>This field is required</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control {...register("email", { required: true })} type="email" placeholder="Enter email" />
                            {errors?.email && <p className='text-danger'>This field is required</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Control {...register("address", { required: true })} type="text" placeholder="Your Address" />
                            {errors?.address && <p className='text-danger'>This field is required</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Control {...register("phone", { required: true })} type="number" placeholder="Your Phone Number" />
                            {errors?.phone && <p className='text-danger'>This field is required</p>}
                        </Form.Group>
                        <Button className='fw-semibold appointment-btn' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <ThanksModal showModal={showModal} setShowModal={setShowModal}></ThanksModal>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;