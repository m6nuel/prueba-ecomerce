import { useId } from 'react'
import { useFilters } from '../Hooks/useFilters'

function Filters () {
  const filterPrice = useId()
  const filterCategory = useId()
  const { filters, setFilters } = useFilters()

  const handleChangePrice = (e) => {
    setFilters(prevSate => ({
      ...prevSate,
      minPrice: e.target.value
    }))
  }

  const handlechangeCategory = (e) => {
    setFilters(prevSate => ({
      ...prevSate,
      category: e.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={filterPrice}>Precio a partir de : </label>
        <input
          type='range'
          min='0'
          max='800'
          id={filterPrice}
          onChange={handleChangePrice}
          value={filters.minPrice}
        />
        <div>$ {filters.minPrice}</div>
      </div>
      <div>
        <label htmlFor={filterPrice}>Categoria: </label>
        <select id={filterCategory} onChange={handlechangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
          <option value="fragrances">Perfumes</option>
          <option value="skincare">Protector solar</option>
          <option value="groceries">Comestibles</option>
          <option value="home-decoration">Hogar</option>
        </select>
      </div>
    </section>
  )
}
export default Filters
