/* eslint-disable react/prop-types */
import { AddToCartIcon } from './Icons'
import './Products.css'
function Products ({ products }) {
  return (
    <main className='products'>
      <ul>
        {
          products.map(products => (
            <li key={products.id}>
              <img src={products.thumbnail} alt={products.category} />
              <div>
                <h3>{products.title}</h3>
              </div>
              <div>
                <h3>${products.price}</h3>
              <button>
                <AddToCartIcon />
              </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
export default Products
