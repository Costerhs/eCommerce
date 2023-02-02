import { useEffect, useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { productApi } from './assets/api/api'
import Footer from './component/foot/Footer'
import Header from './component/header/Header'
import Auth from './page/auth/Auth'
import MainPage from './page/main/MainPage'
import Products from './page/products/Products'

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

  useEffect(() => {
    productApi.getFavorites()
  }, [])

  return (
    <div className="App">
      {!location && <Header />}
      <Routes>
        <Route path='auth' element={<Auth />} />
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/products'} element={<Products />} />
      </Routes>
      {!location && <Footer />}
    </div>
  )
}

export default App
