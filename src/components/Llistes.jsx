import Card from './Card'

function Llistes({ titol, llista }) {
  return (
    <section className="llista">
      <h2>{titol}</h2>
      <div className="cards">
        {llista.map(element => (
          <Card key={element.titol} element={element}/>
        ))}
      </div>
    </section>
  )
}

export default Llistes
