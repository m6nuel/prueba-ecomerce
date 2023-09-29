import { products } from './mocks/products.json'
import './App.css'
import Filters from './components/Filters'
import Products from './components/Products'
import { useFilters } from './Hooks/useFilters'

function App () {
  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(products)

  return (
    <>
      <h1>Ecomerce</h1>
      <Filters />
      <Products products={productsFiltered}/>
    </>
  )
}

export default App
