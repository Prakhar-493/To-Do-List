import React from 'react'
import { NavLink } from 'react-router-dom'
import { saveUserToLocalStorage } from '../redux/Slice.js'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  // Regex patterns
  const navigate = useNavigate();
  const nameRegex = /^[a-zA-Z ]{2,30}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/; // min 8 chars, 1 letter, 1 number

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (!nameRegex.test(name)) {
      alert('Name must be 2-30 letters and spaces only.');
      return;
    }
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!passwordRegex.test(password)) {
      alert('Password must be at least 8 characters, include at least one letter and one number.');
      return;
    }

    saveUserToLocalStorage({ name, email, password });
    toast.success('Registration successful!');
    setTimeout(() => {
      navigate('/Login'); 
    }, 1200); 
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?
          <NavLink
            to="/Login"
            className={({ isActive }) =>
              `ml-2 font-medium ${isActive ? 'text-pink-600 underline' : 'text-indigo-600 hover:underline'}`}>Log In</NavLink>
        </p>
      </div>
    </div>
  )
}

export default Register