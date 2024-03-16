import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    const [counter, setCounter] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (counter === 0) {
            navigate('/');
        }
    }, [counter, navigate]);

    return (
        <Container>
            <Row className='py-5'>
                <h1 className='display-3 text-center'><span className='text-danger'>Ooops!</span> We cannot find your page.</h1>
                <p className='lead text-center'>
                    You will be redirected to the home page in <span className='text-primary fw-bold'>{counter}</span> seconds.
                </p>
                <Link to={"/"} className='btn btn-primary'>Go Back To Homepage!</Link>
            </Row>
        </Container>
    );
}

export default NotFound;
