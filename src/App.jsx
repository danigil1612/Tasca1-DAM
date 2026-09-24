import './App.css'
import Header from './components/Header'
import Llistes from './components/Llistes'
import Footer from './components/Footer'
import data from './data'

function App() {
  const llistaAny = data.filter(element => element.any === 2026)
  const llistaGenere = data.filter(element => element.genere === 'Ciència-ficció')
  const llistaRating = data.filter(element => element.rating > 8)

  return (
    <div className="app">
      <Header />
      <main>
        <Llistes titol="Any actual (2026)" llista={llistaAny}/>
        <Llistes titol="Gènere: Ciència-ficció" llista={llistaGenere}/>
        <Llistes titol="Rating > 8" llista={llistaRating}/>
      </main>
      <Footer />
    </div>
  )
}

export default App
