import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear(); // clear token, role, etc.
        navigate('/login');
    }, [navigate]);

    return null;
};

export default Logout;