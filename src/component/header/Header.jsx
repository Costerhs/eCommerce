import './style.scss'
import { MdFavorite } from 'react-icons/md'
import { BsBasketFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import Burger from './burger/Burger'
import Nav from './nav/Nav'
import { RxAvatar } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const token = localStorage.getItem('token')

    return (
        <div className='head'>
            {/* <Burger /> */}
            <div className="head__line"></div>
            <div className="container">
                <Nav token={token} />
                <div className="head__user">
                    <div className="head__icons">
                        <NavLink to={'favorites/'}>
                            <MdFavorite className='head__icon' />
                        </NavLink>
                        <NavLink to={'basket/'}>
                            <BsBasketFill className='head__icon' />
                        </NavLink>
                    </div>
                    {/* <img src={localStorage.getItem("avatarka")} alt='avatar' />
                    <p>{localStorage.getItem('username')}</p> */}
                    {token ? <RxAvatar className='head__icon-ava' /> :
                        <NavLink to={'/auth'} className='head__login'>SignUp/SingIn</NavLink>
                    }

                    <GiHamburgerMenu className='head__icon head__menu-btn' />
                </div>
            </div>
            <div className="head__line-bot"></div>
        </div>
    )
}

export default Header