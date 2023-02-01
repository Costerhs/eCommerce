import './style.scss'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const navObj = [
    {
        name: 'Home',
        location: '/'
    },
    {
        name: 'AboutUs',
        location: '/AboutUs'
    },
    {
        name: 'Products',
        location: '/Products'
    },
    {
        name: 'Profile',
        location: '/Profile'
    },
]
const Nav = () => {
    const [activeLink, setActiveLink] = useState('Home');

    return (
        <div className="head__nav">
            <h2>BuySell.kg</h2>
            <div className="head__links">
                {navObj.map(el => {
                    return <NavLink onClick={() => setActiveLink(el.location)} to={el.location} className={`head__link ${activeLink == el.location && 'head__link-active'}`}>{el.name}</NavLink>
                })}
            </div>
        </div>
    )
}

export default Nav