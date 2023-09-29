import { products } from './mocks/products.json'
import './App.css'
import Filters from './components/Filters'
import Products from './components/Products'
import { useFilters } from './Hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
import { Footer } from './components/Footer'

function App () {
  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(products)

  return (
    <CartProvider>
      <h1>Ecomerce</h1>
      <Filters />
      <Cart />
      <Products products={productsFiltered}/>
      <Footer />
    </CartProvider>
  )
}

export default App
