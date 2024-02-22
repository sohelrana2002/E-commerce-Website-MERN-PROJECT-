import Product from '../Product/Product'
import { useFilterProductsContext } from '../../context/filterProductContext'
import Loading from '../Loading/Loading'
import './GridViewProducts.css'

const GridViewProducts = ({ filterProducts }) => {
  const { isFilterLoading } = useFilterProductsContext();
  // console.log(isFilterLoading);
  
  if(isFilterLoading){
    return <Loading />
  }
  return (
    <div className="gridView__products">
        {
            filterProducts && filterProducts?.map((curIndex, index) =>{
                return(
                    <Product key={curIndex.id} {...curIndex}  />
                )
            })
        }
    </div>
  )

}

export default GridViewProducts