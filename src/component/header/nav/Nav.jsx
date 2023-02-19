import './style.scss'
import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navObj = [
    {
        name: 'Главная',
        location: '/',
        private: false
    },
    {
        name: 'О нас',
        location: '/aboutUs/',
        private: false
    },
    {
        name: 'Товары',
        location: '/products/',
        private: false
    },
    {
        name: 'Профиль',
        location: '/profile/',
        private: true
    },
]
const Nav = ({ token }) => {
    const location = useLocation().pathname

    return (
        <div className="head__nav">
            <NavLink to={'/'} className='head__logo'>BuySell.kg</NavLink>
            <div className="head__links">
                {navObj.map((el, ind) => {
                    if (!token && el.private) return
                    return <NavLink key={ind} to={el.location} className={`head__link ${location == el.location && 'head__link-active'}`}>{el.name}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Nav