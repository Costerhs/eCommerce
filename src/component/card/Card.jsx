import { useEffect } from 'react'
import './style.scss'
/*
image
title
price
category
*/
const Card = ({ data }) => {
    return (
        <div className='card'>
            <div className="card__img">
                <img src={data.image} alt="img" />
            </div>
            <div className="card__title">
                {data.title}
            </div>
            <div className="card__price">
                {data.price} сом
            </div>
        </div>
    )
}

export default Card