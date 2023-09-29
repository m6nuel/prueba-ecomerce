import { products } from '../mocks/products.json'
import './Products.css'

function Products () {
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
                <strong>${products.price}</strong>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}
export default Products
