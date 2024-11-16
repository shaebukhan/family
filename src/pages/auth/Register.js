import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import Loader from '../../components/Loader';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation checks
        if (name === "") {
            toast.error("Le nom est requis!");
            return;
        } else if (email === "") {
            toast.error("L'email est requis!");
            return;
        } else if (password === "") {
            toast.error("Le mot de passe est requis!");
            return;
        }

        setLoading(true); // Start loading

        try {
            // Submit form data to backend
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, {
                name,
                email,
                password,
            });

            if (res.data.success) {
                toast.success(res.data.message); // Success message
                navigate("/login"); // Redirect to login page
            } else {
                toast.error(res.data.message); // Error message
            }
        } catch (error) {
            toast.error(error.message || "Une erreur s'est produite!");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <div className="auth-main">
                <h1 className='common-title text-center'>
                    Registre
                </h1>
                <div className="auth-inp-main">
                    <form className='form-login' onSubmit={handleSubmit}>
                        <div className="auth-group">
                            <input
                                type="text"
                                placeholder='Nom'
                                value={name}
                                onChange={(e) => setName(e.target.value)} // Binding input with state
                            />
                        </div>
                        <div className="auth-group">
                            <input
                                type="text"
                                placeholder='Email ou Account ID'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Binding input with state
                            />
                        </div>
                        <div className="auth-group">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                placeholder='Mot de passe'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} // Binding input with state
                            />
                            <span
                                className="toggle-btn"
                                id="togglePassword"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <div className="py-5 d-flex justify-content-center">
                            <button type="submit" className='auth-btn border-0'>
                                Registre
                            </button>
                        </div>
                        <div className="text-center pb-5">
                            <Link to={"/login"} className='link-btn'>
                                Vous avez déjà un compte ? Se connecter
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
