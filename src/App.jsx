import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './component/foot/Footer'
import Header from './component/header/Header'
import Auth from './page/auth/Auth'
import MainPage from './page/main/MainPage'

const App = () => {
  const locat = useLocation();
  const [location, setLocation] = useState(false);

  useEffect(() => {
    if (locat.pathname === "/auth") {
      setLocation(true);
    } else {
      setLocation(false);
    }
  }, [locat]);

  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        <Route path='auth' element={<Auth />} />
        <Route path={'/'} element={<MainPage />} />
      </Routes>
      {!location && <Footer />}
    </div>
  )
}

export default App
