import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './Component/Profile'
import Login from './Component/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hello World!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
