import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addBasket, addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import { delFavorite } from '../../store/reducers/ProductSlice'
import { useEffect, useState } from 'react'
import { SlBasket } from 'react-icons/sl'

const Card = ({ data, isDel }) => {
    const dispatch = useDispatch()

    const favoriteF = () => {
        if (isDel >= 1) {
            dispatch(delFavorite({ id: data.id, arr: 'favoritesProduct' }))
            dispatch(deleteFavorite(data.deleteId))
        } else {
            dispatch(addFavorite(data.id))
        }
    }
    const addBaskets = () => {
        dispatch(addBasket(data.id))
    }


    return (
        <div className='card'>
            <div className="card__btns">
                <img src={data.deleteId ? favorite : favoriteEmpty}
                    alt="favorite"
                    // className='card__favorite'
                    onClick={favoriteF} />
                <SlBasket className='card__del' onClick={addBaskets} />
            </div>
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