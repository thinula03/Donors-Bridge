import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log({ username, password });
    };

    return (
        <div className="auth-bg">
        <div className="container">
            <div className="login-card">
                <h2 className="text-center brand-title mb-4">DonorsBridge Login</h2>

                {/* TODO: Flash messages / error display */}

                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label className="form-label">Username or Email</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-grid mt-4">
                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                    </div>

                    <div className="text-center mt-3">
                        <small>
                            Don't have an account? <Link to="/register">Register here</Link>
                        </small>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Login;
