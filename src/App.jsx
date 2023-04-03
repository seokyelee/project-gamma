import { Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'

function App() {

  return (
    <>
    <header>
      <h1>Proyect Gamma</h1>
    </header>  
    <main>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/contact" element={<Contact />} />    
      </Routes>
    </main>
    
    </>
    )   
}

export default App
