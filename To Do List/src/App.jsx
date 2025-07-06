import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landingpage from './components/Landingpage'
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile'; 
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
        <div>
          <Landingpage />
        </div>
    },
    {
      path: '/Register',
      element:
        <div>
          <Register />
      </div>
    },
    {
      path: '/Login',
      element:
        <div>
          <Login />
        </div>
    },
    {
      path: '/Profile',
      element:
        <div>
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        </div>
    },
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
