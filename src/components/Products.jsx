/* eslint-disable react/prop-types */
import { useCart } from '../Hooks/useCart'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import './Products.css'
function Products ({ products }) {
  const { addToCart, cart, removeFormCart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.map(product => {
            const isProductInCart = checkProductInCart(product)
            
            return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.category} />
              <div>
                <span>{product.title}</span> - ${product.price}
              </div>
              <button 
                style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                onClick={() => {
                isProductInCart
                  ? removeFormCart(product)
                  : addToCart(product)
              }}>
                {
                  isProductInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
                  
                }
              </button>
            </li>
          )})
        }
      </ul>
    </main>
  )
}
export default Products
