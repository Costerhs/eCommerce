import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../component/card/Card'
import LoaderList from '../../component/loaderOfCard/LoaderList';
import MyLoader from '../../component/loaderOfCard/LoaderOfCard';
import { getProducts } from '../../store/reducers/ActionCreator';
import Banner from './banner/Banner';
import './style.scss'

const MainPage = () => {
    const products = useSelector(el => el.productReducer.products)
    const load = useSelector(el => el.productReducer.load)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <div className='main'>
            <Banner />
            <div className="container">
                <h2>Популярные товары</h2>
                <div className="main__list">
                    {load && <LoaderList />}

                    {products.length > 0 ? products.map((el, ind) => {
                        return <Card data={el} key={ind} />
                    }) : 'Товары отсутствуют'}

                </div>
            </div>
        </div>
    )
}

export default MainPage