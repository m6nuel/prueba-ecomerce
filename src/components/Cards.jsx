function Cards (products) {
  return (
    <li key={products.id}>
      <img src={products.thumbnail} alt={products.category} />
      <div>
        <span>{products.title}</span>
      </div>
      <div>
        <strong>${products.price}</strong>
      </div>
    </li>
  )
}
export default Cards
