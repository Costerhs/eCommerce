import './style.scss'
import searchImg from '../../assets/img/search.png'
const Search = ({ searchText, setSearchText }) => {
    return (
        <div className='search'>
            <img src={searchImg} alt="asd" className='search__img' />
            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className='search__inp' type="text" name='search' placeholder='я зочу купить' />
            <label className='search__label' htmlFor="search">Найти</label>
        </div>
    )
}
//search
export default Search