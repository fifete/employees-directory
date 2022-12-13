import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';

export const Login = ({setAuthorization}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const navigate = useNavigate();

    const errors = {
        email: "invalid email",
        pass: "invalid password",
        fields: "Fields are required",
    };

    const database = [
        {
            email: "user1@gmail.com",
            password: "pass1"
        },
        {
            email: "user2@gmail.com",
            password: "pass2"
        }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
        // No empty fields
        if (email === "" || password === "") {
            setErrorMessages(errors.fields);
            return;
        }

        // Find user login info
        const userData = database.find((user) => user.email === email);

        // Compare user info
        if (userData) {
            if (userData.password !== password) {
                // Invalid password
                setErrorMessages(errors.pass);
            } else {
                // Login success
                setErrorMessages('');
                setAuthorization(true);
                navigate('/home');
                console.log("Login success");
            }
        } else {
            // Username not found
            setErrorMessages(errors.email);
        }
    }
    return (
        <div className='login'>
            <img
                src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-logo-0.png'
                className="login-logo"
                alt="logo"
            />
            <div className='login-container'>
                <form className='login-form' onSubmit={handleLogin}>
                    <p>Welcome back!</p>
                    <h2>Login to your account</h2>
                    {errorMessages && <div className='login-error'>{errorMessages}</div>}
                    <label for="email"><b>Email</b></label>
                    <input
                        type='email'
                        placeholder='Introduce email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        name="email" required />
                    <label for="password"><b>Password</b></label>
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        name="password" required />
                    <button type="submit">Login now</button>
                </form>
            </div>
        </div>
    )
}
