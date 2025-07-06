import { createSlice } from '@reduxjs/toolkit'

// Initial state for user details
const initialState = {
  name: '',
  email: '',
  password: '',
  loggedIn: false, // <-- Add this line for global loggedIn
}

// Create the slice
const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name
      state.email = action.payload.email
      state.password = action.payload.password
      state.loggedIn = action.payload.loggedIn
    },
    clearUser: (state) => {
      state.name = ''
      state.email = ''
      state.password = ''
    },
  },
})

export const { setUser, clearUser } = detailsSlice.actions
export default detailsSlice.reducer

// Save user data to localStorage (store multiple users)
export function saveUserToLocalStorage({ name, email, password }) {
  const user = { name, email, password }
  const users = JSON.parse(localStorage.getItem('users')) || []
  users.push(user)
  localStorage.setItem('users', JSON.stringify(users))
}

// Get all users from localStorage
export function getUsersFromLocalStorage() {
  return JSON.parse(localStorage.getItem('users')) || []
}

// Remove all users from localStorage
export function removeUsersFromLocalStorage() {
  localStorage.removeItem('users')
}