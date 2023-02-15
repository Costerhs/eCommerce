import './style.scss'
import Card from '../../component/card/Card'
import LoaderList from '../loaderOfCard/LoaderList'
import Pagination from '../pagination/Pagination'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'


const ProductsList = ({ load, products, activeCategory }) => {
    const [order, setOrder] = useState(1)
    const isDel = useLocation().pathname.indexOf('favorites')

    useEffect(() => {
        //когда меняется категория то пагинация сбрасывается
        setOrder(1)
    }, [activeCategory])

    return (
        <div className='productsList'>
            <div className="productsList__list">
                {load && <LoaderList />}
                {products.length > 0 && !load && products.slice((order * 4) - 4, order * 4).map((el, ind) => {
                    return <Card isDel={isDel} data={el} key={ind} />
                })}
                {products.length === 0 && !load && 'Товары отсутствуют'}
            </div>
            <Pagination lengths={products.length} order={order} setOrder={setOrder} />
        </div>
    )
}

export default ProductsList