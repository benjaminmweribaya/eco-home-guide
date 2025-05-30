import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../AppContext';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Eye, EyeOff, UserPlus } from 'lucide-react';

function Signup() {
    const { handleSignup, user } = useContext(AppContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string().required('Password is required').min(6, 'At least 6 characters'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm your password'),
        }),
        onSubmit: async (values) => {
            await handleSignup(values.username, values.password);
        },
    });

    useEffect(() => {
        if (user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const togglePassword = () => setShowPassword(!showPassword);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <motion.form
                onSubmit={formik.handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                {/* Icon section */}
                <div className="flex justify-center items-center bg-green-100 rounded-xl p-4">
                    <UserPlus size={40} className="text-green-600 md:hidden" />
                    <UserPlus size={80} className="text-green-600 hidden md:block" />
                </div>

                {/* Form section */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Create Your Account</h2>

                    {/* Username */}
                    <input
                        name="username"
                        placeholder="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {formik.touched.username && formik.errors.username && (
                        <div className="text-red-500 text-sm mb-2">{formik.errors.username}</div>
                    )}

                    {/* Password */}
                    <div className="relative mb-2">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <div
                            onClick={togglePassword}
                            className="absolute right-3 top-3 text-gray-500 cursor-pointer"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </div>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="text-red-500 text-sm mb-2">{formik.errors.password}</div>
                    )}

                    {/* Confirm Password */}
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="w-full p-3 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="text-red-500 text-sm mb-4">{formik.errors.confirmPassword}</div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Sign Up
                    </button>

                    <p className="text-center text-gray-600 mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-green-500 hover:underline">Log in here</Link>.
                    </p>
                </div>
            </motion.form>
        </div>
    );
}

export default Signup;


