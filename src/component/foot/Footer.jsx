import './style.scss'
import '../../assets/img/inst.png'
const Footer = () => {
    return (
        <div className='foot'>
            <h2>BueSell.kg</h2>
            <div className="foot__info">
                <div className="foot__text">Присоединяйтесь к нам</div>
                <a className="foot__icon" href='insthttp://instagram.com/'>
                    <img src="src/assets/img/inst.png" alt="" />
                </a>
                <a className="foot__icon" href='#'>
                    <img src="src/assets/img/facebook.png" alt="face" />
                </a>
                <a className="foot__icon" href='#'>
                    <img src="src/assets/img/vk.png" alt="vk" />
                </a>
            </div>
        </div>
    )
}

export default Footer