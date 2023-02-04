import './style.scss'
import left from '../../assets/img/left.svg'
import leftBlack from '../../assets/img/leftBlack.svg'
import right from '../../assets/img/right.svg'
import rightBlack from '../../assets/img/rightBlack.svg'
import { useEffect, useState } from 'react'

const Pagination = ({ lengths, setOrder, order }) => {
    const [pagNum, setPagNum] = useState([])

    useEffect(() => {
        setPagNum(Array(Math.round(lengths / 4)).fill(null))
    }, [lengths])

    useEffect(() => {
        console.log(lengths)
    }, [pagNum])
    return (
        <div className='pagination'>
            <div className={order <= 1 ? "pagination__arrow-disabled" : "pagination__arrow"} onClick={() => setOrder(el => el = el - 1)}>
                <img src={order > 1 ? leftBlack : left} alt="arrow" className="pagination__img" />
            </div>
            {pagNum.map((el, ind) => {
                return <p className={order === ind + 1 ? "pagination__num-active" : "pagination__num"} key={ind}>{ind + 1}</p>
            })}
            <div className={order === pagNum.length ? "pagination__arrow-disabled" : "pagination__arrow"} onClick={() => setOrder(el => el = el + 1)}>
                <img src={order < pagNum.length ? rightBlack : right} alt="arrow" className="pagination__img" />
            </div>
        </div>
    )
}

export default Pagination