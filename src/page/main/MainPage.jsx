import { useEffect, useState } from 'react'
import { productApi } from '../../assets/api/api';
import Card from '../../component/card/Card'
import Banner from './banner/Banner';
import './style.scss'

const MainPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        productApi.getAllProduct()
            .then(el => setProducts(el.data))
    }, [])
    return (
        <div className='main'>
            <Banner />
            <div className="container">
                <h2>Популярные товары</h2>
                <div className="main__list">
                    {products.length > 0 && products.map((el, ind) => {
                        return <Card data={el} key={ind} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainPage