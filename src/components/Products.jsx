/* eslint-disable react/prop-types */
import './Products.css'
function Products ({products}) {
  return (
    <main className='products'>
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
    </main>
  )
}
export default Products
