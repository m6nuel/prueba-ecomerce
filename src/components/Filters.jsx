import { useId } from 'react'

function Filters () {
  const filterPrice = useId()
  const filterCategory = useId()

  const handleChangePrice = () => {

  }

  const handlechangeCategory = () => {

  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor={filterPrice}>Precio a partir de : </label>
        <input
          type='range'
          min='0'
          max='1000'
          id={filterPrice}
          onChange={handleChangePrice}
        />
        <span>$ 200</span>
      </div>
      <div>
        <label htmlFor={filterPrice}>Categoria</label>
        <select id={filterCategory} onChange={handlechangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Portatiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
export default Filters
