import React from 'react'
import { NavLink } from 'react-router-dom'
import { getUsersFromLocalStorage, setUser } from '../redux/Slice.js'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151]">
      <Toaster />
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold"
            onClick={(e) => {
              e.preventDefault();
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              if (!email || !password) {
                toast.error("Please fill in all required fields");
                return;
              }
              const users = getUsersFromLocalStorage();
              const user = users.find(user => user.email === email && user.password === password);
              if (user) {
                // Set Redux state as logged in
                dispatch(setUser({ name: user.name, email: user.email, password: user.password , loggedIn: true }));
                toast.success("Login successful!");
                setTimeout(() => {
                  navigate('/Profile');
                }, 1200);
              } else {
                toast.error("Invalid email or password");
              }
            }}
          >
            Log In
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?
          <NavLink to="/Register"
            className={({ isActive }) =>
              `ml-2 font-medium ${isActive ? 'text-pink-600 underline' : 'text-indigo-600 hover:underline'}`}>Sign up</NavLink>
        </p>
      </div>
    </div>
  )
}

export default Login