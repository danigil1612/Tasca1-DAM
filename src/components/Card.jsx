function Card({ element }) {
  return (
    <article className="card">
      <h3>{element.titol}</h3>
      <p>Any: {element.any}</p>
      <p>Gènere: {element.genere}</p>
      <p>Rating: {element.rating}/10</p>
    </article>
  )
}

export default Card
