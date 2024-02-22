import { BsFillGridFill, BsList } from 'react-icons/bs'
import GridViewProducts from '../GridViewProducts/GridViewProducts'
import ListViewProducts from '../ListViewProducts/ListViewProducts'
import { useFilterProductsContext } from '../../context/filterProductContext'

import './ProductsSort.css'


const ProductsSort = () => {
  const { setListView, setGridView, gridView, filterProducts, handleSorting } = useFilterProductsContext();
  
  return (
    <div className="productSort__container">
      <div className="productSort__icon">
          <button className={gridView ? "view__btn active" : "view__btn"} onClick={setGridView}><BsFillGridFill /></button>
          <button className={gridView ? "view__btn " : "active view__btn"} onClick={setListView}><BsList /></button>

      </div>

      <div className="productSort__total">
       {filterProducts.length} Product Available
      </div>

      
    <div className="productSort__filter">
      <form>
        <label htmlFor="sort"></label>
        <select name="sort" id="sort" onClick={handleSorting}>
          <option disabled></option>
          <option value="lowest">Price(lowest)</option>
          <option disabled></option>
          <option value="highest">Price(highest)</option>
          <option disabled></option>
          <option value="a-z">Price(a-z)</option>
          <option disabled></option>
          <option value="z-a">Price(z-a)</option>
          <option disabled></option>
        </select>
      </form>
    </div>
    </div>
  )
}

export default ProductsSort