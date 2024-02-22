import { NavLink } from 'react-router-dom';
import ProductPrice from '../ProductPrice/ProductPrice';

import './ListViewProducts.css'

const ListViewProducts = ({filterProducts}) => {
  return (
    <div className="listView__container">
      {
        filterProducts && filterProducts?.map((curIndex) =>{
          const {id, name, image, price, description } = curIndex;

          return(
              <div key={id} className="listView__card">
                <div className="listView__card-image">
                  <img src={image} alt={id} />
                </div>

                <div className="listView__card-content">
                  <h2>{name}</h2>
                  <span className="listView__price"><ProductPrice price={price} /></span>
                  <span className="listView__des">{description?.slice(0, 85)} ...</span>
                  <NavLink to={`/singleproduct/${id}`} className='btn'>Read More</NavLink>
                </div>
              </div>
          )
        })
      }
    </div>
  )
}

export default ListViewProducts