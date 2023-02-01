import { NavLink } from 'react-router-dom'
import './style.scss'
import { MdFavorite } from 'react-icons/md'
import { BsBasketFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import Burger from './burger/Burger'

const Header = () => {
    return (
        <div className='head'>
            {/* <Burger /> */}
            <div className="head__line"></div>
            <div className="container">
                <div className="head__nav">
                    <h2>BuySell.kg</h2>
                    <div className="head__links">
                        <p className='head__link head__link-active'>Home</p>
                        <p className='head__link'>About Us</p>
                        <p className='head__link'>Favorite</p>
                        <p className='head__link'>More</p>
                    </div>
                </div>
                <div className="head__user">
                    <div className="head__icons">
                        <MdFavorite className='head__icon' />
                        <BsBasketFill className='head__icon' />
                    </div>
                    <img src={localStorage.getItem("avatarka")} alt='avatar' />
                    <p>{localStorage.getItem('username')}</p>
                    <GiHamburgerMenu className='head__icon head__menu-btn' />
                </div>
            </div>
            <div className="head__line-bot"></div>
        </div>
    )
}

export default Header