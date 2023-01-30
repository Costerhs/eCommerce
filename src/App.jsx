import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './page/auth/Auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='auth' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App
