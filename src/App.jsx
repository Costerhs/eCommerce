import { useEffect, useReducer, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { productApi } from './assets/api/api'
import Footer from './component/foot/Footer'
import Header from './component/header/Header'
import Auth from './page/auth/Auth'
import FavoritesPage from './page/favoritesPage/FavoritesPage'
import MainPage from './page/main/MainPage'
import ProductsPage from './page/productsPage/ProductsPage'

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
        <Route path={'/products'} element={<ProductsPage />} />
        <Route path={'/favorites'} element={<FavoritesPage />} />
      </Routes>
      {!location && <Footer />}
    </div>
  )
}

export default App
