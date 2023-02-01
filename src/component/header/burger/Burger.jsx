import './style.scss'

const Burger = () => {
    return (
        <div className='burger'>
            <h2>BuySell.kg</h2>
            <div className="burger__links">
                <p className='burger__link burger__link-active'>Home</p>
                <p className='burger__link'>About Us</p>
                <p className='burger__link'>Favorite</p>
                <p className='burger__link'>More</p>
            </div>
        </div>
    )
}

export default Burger