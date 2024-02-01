import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import './ForgotPassword.scss';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: complete the function
    };

    return (
        <div className="forgotPassword">
            <Container title="TeLeTxt" subtitle="Reset Password">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {/* <Button type="submit">Send Reset Password</Button> */}
                    <Link onClick={handleSubmit}>Send Reset Password</Link>
                    <Link to="/signin" className="link">Back to sign in</Link>
                </form>
            </Container>
        </div>
    );
};

export default ForgotPassword;
