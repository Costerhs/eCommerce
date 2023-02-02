import './style.scss'

const Search = () => {
    return (
        <div className='search'>
            <input className='search__inp' type="text" name='search' placeholder='я зочу купить' />
            <label className='search__label' htmlFor="search">Найти</label>
        </div>
    )
}
//search
export default Search