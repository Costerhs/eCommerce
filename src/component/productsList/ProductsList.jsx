import './style.scss'
import Card from '../../component/card/Card'
import LoaderList from '../loaderOfCard/LoaderList'

const ProductsList = ({ load, products }) => {
    return (
        <div className='productsList'>
            {load && <LoaderList />}
            {products.length > 0 && products.map((el, ind) => {
                return <Card data={el} key={ind} />
            })}
            {products.length > 0 && load && 'Товары отсутствуют'}
        </div>
    )
}

export default ProductsList