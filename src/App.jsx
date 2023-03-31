import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'

import Header from "./oomponents/Header/Header"
import Home from "./oomponents/Home/Home"
import Pokemon from "./oomponents/Pokemon/Pokemon"
function App() {
  
  //https://pokeapi.co/api/v2/pokemon/pikachu


  return (

    <Router>
        
        <Header/>

        <Routes>

          
        <Route path='/' element={<Home/>} />
        <Route path='/pokemon' element={<Pokemon/>} />
        
        </Routes>


    </Router>
  )
}

export default App
