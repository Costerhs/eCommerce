import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Category from '../category/Category'
import ProductsList from '../productsList/ProductsList'
import Search from '../search/Search'
import { getProducts } from '../../store/reducers/ActionCreator'
import './style.scss'

const Products = ({ title, products }) => {
    const [partOfProduct, setPartOfProduct] = useState()
    const load = useSelector(el => el.productReducer.load)
    const [activeCategory, setActiveCategory] = useState(null)
    const [searchText, setSearchText] = useState();

    useEffect(() => {
        let arr = products.filter(el => el.category === activeCategory)
        setPartOfProduct(arr)
        setSearchText('')
    }, [activeCategory])

    useEffect(() => {
        let arr = products.filter(el => {
            return el.title.includes(searchText)
        })
        setPartOfProduct(arr)
        setActiveCategory(null)
    }, [searchText])

    return (
        <div className='products'>
            <div className="container">
                <Search setSearchText={setSearchText} searchText={searchText} />
                <Category setActiveCategory={setActiveCategory} activeCategory={activeCategory} />
                <h2>{title}</h2>
                <ProductsList products={(activeCategory || searchText) ? partOfProduct : products} load={load} />
            </div>
        </div>
    )
}

export default Products
/*
    const test = useSelector(el => el.productReducer)

    useEffect(() => {
        console.log(test)
    }, [test])*/