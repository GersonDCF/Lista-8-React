import Contador from './Components/Contador'
import Interface from './Components/Interface'
import NomeCompleto from './Components/NomeCompleto'
import ShowName from './Components/ShowName'
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Home() {
  return (
      <div>
          <h1>Lista 08 React</h1>
          <ol>
              <li><Link to="/contador">Contador</Link></li>
              <li><Link to="/show-name">Show Name</Link></li>
              <li><Link to="/interface">Mensagem</Link></li>
              <li><Link to="/nome-completo">Mostrar Nomes</Link></li> 
          </ol>
      </div>
  );
}


export default function App() {

  return (

    <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contador" element={<Contador />} />
                <Route path="/show-name" element={<ShowName />} />
                <Route path="/interface" element={<Interface />} />
                <Route path="/nome-completo" element={<NomeCompleto />} />

            </Routes>
        </Router>
  )
}