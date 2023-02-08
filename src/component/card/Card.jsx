import { useEffect, useState } from 'react'
import './style.scss'
import favorite from '../../assets/img/favorite.svg'
import favoriteEmpty from '../../assets/img/favoriteEmpty.svg'
import { addFavorite, deleteFavorite } from '../../store/reducers/ActionCreator'
import { useDispatch } from 'react-redux'
import ProductsSlice from '../../store/reducers/ProductSlice'
import { delFavorite } from '../../store/reducers/ProductSlice'

const Card = ({ data }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch()

    const favoriteF =  () => {
        if (isFavorite) {
            dispatch(delFavorite({ id: data.id, arr: 'favoritesProduct' }))
            dispatch(deleteFavorite(data.deleteId))
            setIsFavorite(false)
        } else {
            let res = dispatch(addFavorite(data.id))
            setIsFavorite(res)
        }
    }

    useEffect(() => {
        if (data.deleteId) {
            setIsFavorite(true)
        }
    }, [])
    useEffect(() => {
        console.log(data)
    }, [isFavorite])

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