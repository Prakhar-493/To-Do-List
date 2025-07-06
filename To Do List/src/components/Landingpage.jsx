import React from 'react'
import { NavLink } from 'react-router'

const Landingpage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center">
        <div className="text-center space-y-8 max-w-xl xl:h-70 ">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">Ultimate Todo List</h1>
          <p className="text-lg md:text-xl text-white/90">
            Organize your tasks efficiently and boost your productivity with our powerful todo list application.
          </p>
          <div className="space-x-4">
            <NavLink to="/Register"
              className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded shadow hover:bg-gray-100 transition"
            >
              Create Account
            </NavLink>
            <NavLink to="/Login"
              className="inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded shadow hover:bg-blue-800 transition"
            >
              Sign In
            </NavLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white bg-opacity-80">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <span className="text-4xl text-blue-500 mb-4 inline-block">📝</span>
              <h3 className="font-semibold text-lg mb-2">Easy Task Management</h3>
              <p className="text-gray-600">Add, edit, and delete tasks with a simple and intuitive interface.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <span className="text-4xl text-purple-500 mb-4 inline-block">⏰</span>
              <h3 className="font-semibold text-lg mb-2">Reminders & Deadlines</h3>
              <p className="text-gray-600">Set reminders and deadlines to never miss an important task.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <span className="text-4xl text-indigo-500 mb-4 inline-block">📊</span>
              <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Track your productivity and see your progress over time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">About Ultimate Todo</h2>
          <p className="text-gray-700 text-lg">
            Ultimate Todo List is designed to help you stay organized and productive. Whether you’re managing daily chores or planning big projects, our app provides all the tools you need to succeed.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-white bg-gradient-to-r from-blue-700 to-purple-700">
        &copy; {new Date().getFullYear()} Ultimate Todo List. All rights reserved.
      </footer>
    </div>
  )
}

export default Landingpage