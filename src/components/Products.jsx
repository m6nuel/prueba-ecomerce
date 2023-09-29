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
                <span>{products.title}</span> - ${products.price}
              </div>
              <button>
                <AddToCartIcon />
              </button>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
export default Products
