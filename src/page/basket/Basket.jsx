import './style.scss'
import pr from '../../assets/localData/pr'
import BasketCard from './basketCard/BasketCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getBasket } from '../../store/reducers/ActionCreator'
import Load from '../../component/load/Load'

const Basket = () => {
    const dispatch = useDispatch()
    const products = useSelector(el => el.productReducer.basketProducts)
    const sum = useSelector(el => el.productReducer.sum)
    const load = useSelector(el => el.productReducer.loadBasket)

    const getProductOfBasket = () => {
        dispatch(getBasket())
    }

    useEffect(() => {
        getProductOfBasket()
    }, [])
    useEffect(() => {
        console.log(products, sum)
    }, [products])
    return (
        <div className='basket'>
            <div className="container">
                <div className="basket__title">
                    <h1>Корзина</h1>
                    <p><span>В сумме:</span> {sum} сом</p>
                </div>
                <div className="basket__list">
                    {Object.values(products).map((el, ind) => {
                        return <BasketCard getProductOfBasket={getProductOfBasket} key={ind} data={el} />
                    })}
                </div>
            </div>
            <Load isLoad={load} />
        </div>
    )
}

export default Basket