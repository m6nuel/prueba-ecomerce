import { products } from '../mocks/products.json'

function Products () {
  return (
    <ul>
      {
        products.map(products => (
          <li key={products.id}>
            <img src={products.thumbnail} alt={products.category} />
            <div>
              <span>{products.title}</span>
            </div>
            <div>
              <strong>${products.price}</strong>
            </div>
          </li>
        ))
      }
    </ul>
  )
}
export default Products
