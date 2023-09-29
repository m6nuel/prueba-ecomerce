import { products } from './mocks/products.json'
import './App.css'
import Filters from './components/Filters'
import Products from './components/Products'

function App () {
  return (
    <>
      <h1>Ecomerce</h1>
      <Filters />
      <Products products={products} />
    </>
  )
}

export default App
