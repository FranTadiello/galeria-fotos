import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import GaleriaFotos from './components/GaleriaFotos';
import GaleriaFotosPrincipal from './pages/GaleriaFotosPrinciapal'

function App() {

  return (
    <>
      <Header />
      <GaleriaFotos />
      <GaleriaFotosPrincipal />
      <Footer />
    </>
  )
}

export default App
