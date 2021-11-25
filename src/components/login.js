import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import {useNavigate} from 'react-router-dom';



const Login = () => {
    const [Username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function validateForm() {
        return Username.length > 0 && password.length > 0;
    }

    const handleSubmit = async event => {
        localStorage.setItem('loggedIn', true);
        navigate('/home');
        event.preventDefault();

    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit} className="form">
                <Form.Group controlId="Username" className="Username">
                    
                    <Form.Control
                        autoFocus
                        type="email"
                        value={Username}
                        placeholder="username"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" className="password">
                  
                    <Form.Control
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block type="submit" disabled={!validateForm()} className="button">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login;