import { useEffect, useState } from 'react'
import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
/*
image
title
price
category
*/
const Card = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch()

    const favoriteF = () => {
        dispatch(addFavorite(data.id))
    }

    return (
        <div className='card'>
            <img src={isFavorite ? favorite : favoriteEmpty}
                alt="favorite"
                className='card__favorite'
                onClick={favoriteF} />
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