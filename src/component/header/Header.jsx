
import './style.scss'
import { MdFavorite } from 'react-icons/md'
import { BsBasketFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import Burger from './burger/Burger'
import Nav from './nav/Nav'
import { RxAvatar } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className='head'>
            {/* <Burger /> */}
            <div className="head__line"></div>
            <div className="container">
                <Nav />
                <div className="head__user">
                    <div className="head__icons">
                        <NavLink to={'favorites/'}>
                            <MdFavorite className='head__icon' />
                        </NavLink>
                        <BsBasketFill className='head__icon' />
                    </div>
                    {/* <img src={localStorage.getItem("avatarka")} alt='avatar' />
                    <p>{localStorage.getItem('username')}</p> */}
                    <RxAvatar className='head__icon-ava' />
                    <GiHamburgerMenu className='head__icon head__menu-btn' />
                </div>
            </div>
            <div className="head__line-bot"></div>
        </div>
    )
}

export default Header