import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, getUsersFromLocalStorage} from '../redux/Slice.js'
import toast, { Toaster } from 'react-hot-toast';
const Profile = () => {
  const { name, email } = useSelector(state => state.details)
  const dispatch = useDispatch()

  const [editMode, setEditMode] = useState(false)
  const [form, setForm] = useState({ name, email })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSave = () => {
    // Update user in localStorage
    const users = getUsersFromLocalStorage()
    const updatedUsers = users.map(user =>
      user.email === email ? { ...user, name: form.name, email: form.email } : user
    )
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    // Update Redux state
    dispatch(setUser({ name: form.name, email: form.email, loggedIn: true }))

    setEditMode(false)
    toast.success('Profile updated successfully!')

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center mb-4">
            <span className="text-4xl text-white font-bold">👤</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Profile</h2>
          <p className="text-gray-600 mb-6 text-center">
            Welcome to your profile page. Here you can view and edit your account details.
          </p>
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={editMode ? form.name : name}
                disabled={!editMode}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg ${editMode ? 'bg-white' : 'bg-gray-100'} text-gray-700`}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={editMode ? form.email : email}
                disabled={!editMode}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg ${editMode ? 'bg-white' : 'bg-gray-100'} text-gray-700`}
              />
            </div>
            {editMode ? (
              <div className="flex gap-2">
                <button
                  className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
                  onClick={handleSave}
                  type="button"
                >
                  Save
                </button>
                <button
                  className="w-full bg-gray-400 text-white py-2 rounded-lg font-semibold hover:bg-gray-500 transition"
                  onClick={() => {
                    setEditMode(false)
                    setForm({ name, email })
                  }}
                  type="button"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
                onClick={() => setEditMode(true)}
                type="button"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile