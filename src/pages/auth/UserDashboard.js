import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Cookies from "js-cookie";
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from '../../components/Loader';

const UserDashboard = () => {
    const [loading, setLoading] = useState(false);
    const token = Cookies.get("token");
    const [auth, setAuth] = useState(() => {
        // Load initial auth state from cookies
        const authData = Cookies.get('auth');
        return authData ? JSON.parse(authData) : null;
    });

    const [formData, setFormData] = useState({
        name: auth?.user?.name || '',
        email: auth?.user?.email || '',
        id: auth?.user?._id || '',
        password: ''
    });

    useEffect(() => {
        // Update form data when auth state changes
        setFormData({
            name: auth?.user?.name || '',
            email: auth?.user?.email || '',
            id: auth?.user?._id || '',
            password: ''
        });
    }, [auth]);
    const [passwordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
        // Update form data when auth state changes
        setFormData({
            name: auth?.user?.name || '',
            email: auth?.user?.email || '',
            id: auth?.user?.id || '',
            password: ''
        });
    }, [auth]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        const { id, name, email, password } = formData;

        // Validate if email contains "@"
        if (!email.includes('@')) {
            toast.error("Invalid Email! Please include '@' in your email.");
            return;
        }

        // Validate if email is empty
        if (email === "") {
            toast.error("Email is required!");
            return;
        }

        setLoading(true);

        // Prepare payload for profile update
        const payload = { name, email, id };
        if (password) {
            payload.password = password;
        }
        e.preventDefault();
        try {
            const { name, email, password } = formData; // Extract form data
            const { data } = await axios.post(
                `${process.env.REACT_APP_API}/api/v1/auth/update-profile/${id}`,
                { name, email, password },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            if (data.success) {
                toast.success('Profil mis à jour avec succès');
                // Update local auth data
                Cookies.set("auth", JSON.stringify({
                    ...auth,
                    user: { ...auth.user, name, email },
                }));
            } else {
                toast.error(data.message || 'Échec de la mise à jour du profil');
            }
        } catch (error) {
            console.error(error);
            toast.error('Une erreur s\'est produite lors de la mise à jour du profil');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            {loading && <Loader />}
            <div className="mt-top"></div>
            <div className="m-h-100">
                <div className="auth-main">
                    <h1 className="common-title text-center">Compte</h1>
                    <div className="auth-inp-main">
                        <form className="form-login" onSubmit={handleSubmit}>
                            <div className="auth-group">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="auth-group">
                                <input
                                    type="email"
                                    placeholder="Email ou ID du compte"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="auth-group">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    placeholder="Mot de passe"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                                <span
                                    className="toggle-btn"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>

                            <div className="py-5 d-flex justify-content-center">
                                <button type="submit" className="auth-btn border-0">
                                    Mettre à jour le profil
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserDashboard;
